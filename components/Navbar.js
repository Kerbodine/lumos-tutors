import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between border-b-2 border-gray-100 py-4 px-4">
      <Link href="/">
        <li className="flex cursor-pointer items-center">
          {/* <Logo className="h-10 w-10" /> */}
          <h2 className="ml-3 text-xl font-semibold tracking-tight">
            <span className="text-accent">Lumos</span> Tutors
          </h2>
        </li>
      </Link>
      <div className="flex gap-4">
        <Link href="#subjects">
          <button className="font-medium text-gray-700 underline-offset-1 hover:text-accent hover:underline">
            Subjects
          </button>
        </Link>
        <Link href="#reviews">
          <button className="font-medium text-gray-700 underline-offset-1 hover:text-accent hover:underline">
            Reviews
          </button>
        </Link>
        <Link href="#contact">
          <button className="font-medium text-gray-700 underline-offset-1 hover:text-accent hover:underline">
            Contact
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="ml-auto h-8 w-0.5 bg-gray-100"></div>
        <Link href="/login">
          <button className="ml-2 rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-gray-100">
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button className="ml-2 h-10 rounded-lg border-2 border-accent px-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}
