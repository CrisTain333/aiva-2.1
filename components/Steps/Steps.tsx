import React from "react";

const Steps = () => {
  return (
    <div>
      <section className="p-6 ">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium  text-center uppercase"></span>
          <h2 className="text-5xl font-bold text-center text-gray-50">
            How To Use
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gradient-to-r from-sky-400 via-blue-500 to-sky-500">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#111827] text-white">
                1
              </div>
              <p className="text-2xl font-semibold text-white">
                Sign up with email and password or use
                google account.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gradient-to-r from-sky-400 via-blue-500 to-sky-500">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#111827] text-white">
                2
              </div>
              <p className="text-2xl font-semibold text-white">
                Select your model that you want to use .
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gradient-to-r from-sky-400 via-blue-500 to-sky-500">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#111827] text-white">
                3
              </div>
              <p className="text-2xl font-semibold text-white">
                You are good to go
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
