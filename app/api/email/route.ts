import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: any = {
  role: "system",
  content:
    "You are an email writer. Your task is to generate appropriate email responses based on the given prompts. Please make sure to follow email etiquette and use professional language. Respond as if you are writing to a real person. Add relevant details and ask clarifying questions if needed. Use proper grammar and spelling. You can refer to the given prompts while writing the email. Good luck!",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    if (!openai.apiKey) {
      return new NextResponse(
        "OpenAI API Key not configured.",
        { status: 500 }
      );
    }

    if (!messages) {
      return new NextResponse("Messages are required", {
        status: 400,
      });
    }

    // const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    // if (!freeTrial && !isPro) {
    //   return new NextResponse(
    //     "Free trial has expired. Please upgrade to pro.",
    //     { status: 403 }
    //   );
    // }

    const response: any =
      await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [instructionMessage, ...messages],
      });

    // if (!isPro) {
    //   await incrementApiLimit();
    // }
    return NextResponse.json(response?.choices[0]?.message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
