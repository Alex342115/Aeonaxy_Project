import React from "react";
import sofaLogo from "../Assests/developeronsofa.svg";

export default function Tools() {
  return (
    <div
      id="tools"
      className="flex flex-col gap-2 w-full px-10 pt-5 pb-10 bg-orange-100/85 md:px-24 md:pt-10  lg:flex-row lg:px-60 lg:gap-24"
    >
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Developer Tools & Resources
        </h1>
        <img
          src={sofaLogo}
          alt="sofaLogo"
          className="w-48 mx-[auto] md:w-64 lg:w-96 "
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-5 justify-between items-center lg:gap-6">
        <div className="portal flex bg-white/85 rounded-2xl pb-4 md:w-5/6 md:py-3 lg:gap-5 lg:w-5/6">
          <div className=" w-1/4 pt-2.5 h-full flex items-start justify-center md:w-1/6 lg:w-auto lg:ml-3">
            <svg
              className="w-8 lg:w-10 "
              fill="#FDBA74"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 
              96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>
          </div>
          <div className="w-3/4 lg:w-full">
            <h3 className="text-xl py-2 md:text-2xl lg:text-3xl">Demo portal</h3>
            <p className="text-black/70 pb-2 text-sm md:text-base lg:text-lg">
              Explore PayPal product experiences from the customer's perspective
            </p>
            <a
              href="#tools"
              className="text-blue-700 font-semibold text-[0.9rem] md:text-lg lg:text-xl lg:font-medium"
            >
              View Demos
            </a>
          </div>
        </div>
        <div className="executor flex bg-white/85 rounded-2xl pb-4 md:w-5/6 md:py-3 lg:gap-5 lg:w-5/6">
          {" "}
          <div className="w-1/4 h-full pt-2 flex justify-center items-start md:w-1/6 lg:w-auto lg:ml-3 lg:mt-1">
            <svg
              className="w-9 lg:w-11 "
              fill="#FDBA74"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
              39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 
              12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 
              0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 
              0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
              />
            </svg>
          </div>
          <div className="w-3/4 lg:w-full">
            <h3 className="text-xl py-2 md:text-2xl lg:text-3xl">API Executor</h3>
            <p className="text-black/70 pb-2 text-sm md:text-base lg:text-lg">
              Try out PayPal API request and response in multiple porgramming
              languages.
            </p>
            <a
              href="#tools"
              className="text-blue-700 font-semibold text-[0.9rem] md:text-lg lg:text-xl lg:font-medium"
            >
              Try APIs
            </a>
          </div>
        </div>
        <div className="testing flex bg-white/85 rounded-2xl pb-4 md:w-5/6 md:py-3 lg:gap-5 lg:w-5/6">
          <div className="w-1/4 h-full pt-2  flex justify-center items-start md:w-1/6 lg:w-auto lg:ml-3 lg:mt-1">
            <svg
              className="w-9 lg:w-11 "
              fill="#FDBA74"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 
              0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
              />
            </svg>
          </div>
          <div className="w-3/4 lg:w-full">
            <h3 className="text-xl py-2 md:text-2xl lg:text-3xl">Sandbox Testing Guide</h3>
            <p className="text-black/70 pb-2 text-sm md:text-base lg:text-lg">
              Learn how to tes and go live with your intergration with the
              PayPal Sandbox.
            </p>
            <a
              href="#tools"
              className="text-blue-700 font-semibold text-[0.9rem] md:text-lg lg:text-xl lg:font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
