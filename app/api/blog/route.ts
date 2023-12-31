import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: any = {
  role: "system",
  content:
    "Your name is AiVa. You are a blog writer. Your task is to create a model blog post based on the given topic. Please ensure that the blog post is well-researched, organized, and engaging. Use professional language and proper grammar and spelling throughout. Add relevant details, examples, and any necessary references. Feel free to include subheadings, bullet points, or other formatting techniques to enhance readability. Aim for a word count of [specific word count]. Remember to stay on topic and provide valuable insights. You must reply in Markdown format, which means using headings, list formatting, and other syntax elements to structure your content. This will help me understand the heading and other formatting elements. Good luck!",
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
