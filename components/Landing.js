import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Landing() {
  return (
    <div className="flex">
      <div className="flex-1 pt-12">
        <h1 className="text-6xl font-bold leading-[56px] tracking-tight">
          Personalized & Professional <br />
          <span className="text-accent underline decoration-accent/50 underline-offset-2">
            Online Tutoring
          </span>
        </h1>
        <p className="mt-8 text-xl font-medium leading-6 text-black/60">
          Don&apos;t Miss out While You Are Away From School
        </p>
        <div className="mt-8 flex gap-4">
          <button className="flex items-center rounded-lg border-2 border-accent px-4 py-2 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
            Get started <BiRightArrowAlt className="ml-1 text-2xl" />
          </button>
          <button className="flex items-center rounded-lg border-2 border-gray-500 px-4 py-2 font-medium text-gray-500 transition-colors hover:bg-gray-500 hover:text-white">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}