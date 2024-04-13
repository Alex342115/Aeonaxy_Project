import React from "react";
import logo from "../Assests/payment2.svg";

export default function Support() {
  return (
    <div
      id="support"
      className=" px-10 flex flex-col gap-3 py-5  md:flex-row lg:px-60 md:pb-8"
    >
      <div className="flex flex-col gap-3 md:gap-5">
        {" "}
        <h1 className="text-3xl lg:text-4xl">Looking for something else?</h1>
        <p className="text-sm md:text-base lg:text-xl">
          If you need additional help, check out Support articles, community
          resources, and more.
        </p>
        <button className="rounded-full bg-blue-900 text-white text-sm p-1 px-4 font-extralight w-2/5 mx-[auto] md:m-0 md:text-base lg:mx-0 lg:my-6 lg:w-1/4 lg:py-2 lg:text-xl">
          Find Support
        </button>
        <ul className="flex justify-between md:justify-normal md:gap-14 lg:gap-16">
          <li>
            <a
              href="#support"
              className="font-semibold text-sm lg:font-semibold lg:text-xl"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#support"
              className="font-semibold text-sm lg:font-semibold lg:text-xl"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#support"
              className="font-semibold text-sm lg:font-semibold lg:text-xl"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#support"
              className="font-semibold text-sm lg:font-semibold lg:text-xl"
            >
              Docs Archive
            </a>
          </li>
        </ul>
      </div>
      <img src={logo} alt="logo" className="w-48 mx-auto lg:w-96" />
    </div>
  );
}
