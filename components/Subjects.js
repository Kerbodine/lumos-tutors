import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaPencilRuler,
  FaShapes,
} from "react-icons/fa";

export default function Subjects() {
  return (
    <div className="flex gap-4">
      <div className="relative h-auto basis-1/3 pr-8">
        <div className="absolute -top-12" id="subjects"></div>
        <h2 className="mb-2 text-3xl font-semibold tracking-tight text-gray-700">
          What we teach:
        </h2>
        <p className="leading-[22px] text-gray-500">
          Here at Lumos, we provide a wide range of services, all of which are
          listed in our tutors&apos; profile pages. These include, but are not
          limited to, test preparation for +13 Entrance Exams, (I)GCSEs, A
          Levels, and Maths & Science Olympiads. Our tutors have had experience
          and success in these exams. Collectively, we offer tutors for nearly
          all the subjects taught at high school level.
        </p>
      </div>
      <div className="grid basis-2/3 grid-cols-2">
        <div className="subject-container">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-amber-100 text-amber-500">
            <FaBook className="text-4xl" />
          </div>
          <div>
            <p className="mb-1 text-xl font-semibold text-gray-700">
              +13 Entrance Exams
            </p>
            <p className=" text-sm leading-4 text-gray-500">
              Entrance Exams for UK Boarding Schools.
            </p>
          </div>
        </div>
        <div className="subject-container">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-blue-100 text-blue-500">
            <FaChalkboardTeacher className="text-4xl" />
          </div>
          <div>
            <p className="mb-1 text-xl font-semibold text-gray-700">(i)GCSEs</p>
            <p className=" text-sm leading-4 text-gray-500">
              We provide a range of GCSE subject tutors
            </p>
          </div>
        </div>
        <div className="subject-container">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
            <FaShapes className="text-4xl" />
          </div>
          <div>
            <p className="mb-1 text-xl font-semibold text-gray-700">
              A(S) Level, IB, DSE
            </p>
            <p className=" text-sm leading-4 text-gray-500">
              AS Level test preparation (suitable for Year 11/Year 12 students)
            </p>
          </div>
        </div>
        <div className="subject-container">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-violet-100 text-violet-500">
            <FaPencilRuler className="text-4xl" />
          </div>
          <div>
            <p className="mb-1 text-xl font-semibold text-gray-700">SAT/ACT</p>
            <p className=" text-sm leading-4 text-gray-500">
              We provide test preparation for US exams such as ACT, SAT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
