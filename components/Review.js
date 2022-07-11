import React from "react";
import { BiStar } from "react-icons/bi";

export default function Review() {
  return (
    <div className="w-full rounded-lg bg-gray-100 p-6">
      <div className="flex gap-3 text-gray-700">
        <div className="h-12 w-12 rounded-full bg-gray-500"></div>
        <div>
          <p className="flex gap-0.5 text-xl">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </p>
          <p className="text-xl font-semibold">John Doe</p>
        </div>
      </div>
      <p className="mt-3 leading-5 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        recusandae repudiandae veritatis saepe tempora consequatur, quam velit
        dolor enim ut?
      </p>
    </div>
  );
}
