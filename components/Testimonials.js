import React from "react";
import Review from "./Review";

export default function Testimonials() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-12" id="reviews"></div>
      <h2 className="mb-2 text-3xl font-semibold tracking-tight text-gray-700">
        Reviews:
      </h2>
      <p className="leading-[22px] text-gray-500">
        Read trusted reviews from our students to help you choose the right
        tutor for your needs.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
