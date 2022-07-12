import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CgLaptop } from "react-icons/cg";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="border-b-2 border-gray-200 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <CgLaptop className="text-3xl text-accent" />
                <Link href="/">
                  <li className="flex cursor-pointer items-center">
                    {/* <Logo className="h-10 w-10" /> */}
                    <h2 className="ml-2 text-xl font-semibold tracking-tight">
                      <span className="text-accent">Lumos</span> Tutors
                    </h2>
                  </li>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
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
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
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
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <BiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="border-t-2 border-gray-200 sm:hidden">
            <div className="space-y-1 px-2 py-2">
              {/* Active: className="block rounded-md bg-accent px-3 py-2 text-base font-medium text-white" */}
              <Disclosure.Button
                as="a"
                href="/#subjects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Subjects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#reviews"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Reviews
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className="border-t-2 border-gray-200 py-2">
              <div className="space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                  href="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
                >
                  Log in
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/signup"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
                >
                  Sign up
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
