import Image from "next/image";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Landing() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="pt-12 md:basis-1/2">
        <h1 className="text-4xl font-semibold leading-[36px] tracking-tight sm:text-5xl sm:leading-[44px] lg:text-6xl lg:leading-[56px]">
          Personalized & Professional <br />
          <span className="text-accent underline decoration-accent/50 underline-offset-2">
            Online Tutoring
          </span>
        </h1>
        <p className="mt-8 text-lg font-medium leading-5 text-black/60 md:text-xl md:leading-6">
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
      <div className="relative w-full flex-auto md:basis-1/2">
        <Image
          src="/tutor-illustration.svg"
          layout="fill"
          alt="Tutoring Illustration"
        />
      </div>
    </div>
  );
}
