import React from "react";

export default function Contact() {
  return (
    <div className="mt-48 h-64 w-full bg-gray-100">
      <div
        id="contact"
        className="mx-auto w-full max-w-6xl -translate-y-28 px-6"
      >
        <section className="flex w-full flex-col items-center rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg md:flex-row">
          <div className="mr-4 ml-2 w-auto max-w-sm">
            <h3 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Lets Get in Touch
            </h3>
            <p className="text-gray-600">
              Please feel free to contact us for more information or to book
              your first lesson!
            </p>
          </div>
          <div className="mx-auto ml-auto mt-4 w-full max-w-md flex-auto space-y-2 md:mx-0 md:mt-0 md:ml-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First name"
                className="h-10 min-w-0 flex-auto rounded-lg border-2 border-gray-200 px-2 focus:border-accent focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="h-10 min-w-0 flex-auto rounded-lg border-2 border-gray-200 px-2 focus:border-accent focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email..."
              className="h-10 w-full flex-auto rounded-lg border-2 border-gray-200 px-2 focus:border-accent focus:outline-none"
            />
            <div className="relative">
              <textarea
                placeholder="Enter your message..."
                className="block h-24 w-full resize-none rounded-lg border-2 border-gray-200 p-2 text-gray-600 focus:border-accent focus:outline-none"
              />
              <button className="absolute bottom-2 right-2 flex items-center rounded-lg border-2 border-accent px-2 py-1.5 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
