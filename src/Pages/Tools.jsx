import React from "react";
import sofaLogo from "../Assests/developeronsofa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tools() {
  return (
    <div className="tools flex flex-col gap-2 w-full px-10 pt-5 pb-10 bg-orange-100/85 lg:flex-row lg:px-60 lg:gap-24">
      <div>
        <h1 className="text-3xl lg:text-5xl">Developer Tools & Resources</h1>
        <img
          src={sofaLogo}
          alt="sofaLogo"
          className="w-48 mx-[auto] lg:w-96 "
        />
      </div>
      <div className="flex flex-col gap-3 justify-between">
        <div className="portal flex bg-white/85 rounded-2xl pb-4 px-2">
          <div className="w-1/4 h-full ">
            <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
          </div>
          <div className="w-3/4 ">
            <h3 className="text-xl py-2 lg:text-3xl">Demo portal</h3>
            <p className="text-black/70 pb-2 text-sm lg:text-lg">
              Explore PayPal product experiences from the customer's perspective
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold text-[0.9rem] lg:text-xl lg:font-medium"
            >
              View Demos
            </a>
          </div>
        </div>
        <div className="executor flex bg-white/85 rounded-2xl pb-4 px-2">
          {" "}
          <div className="w-1/4 h-full ">
            <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
          </div>
          <div className="w-3/4 ">
            <h3 className="text-xl py-2 lg:text-3xl">API Executor</h3>
            <p className="text-black/70 pb-2 text-sm lg:text-lg">
              Try out PayPal API request and response in multiple porgramming
              languages.
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold text-[0.9rem] lg:text-xl lg:font-medium"
            >
              Try APIs
            </a>
          </div>
        </div>
        <div className="testing flex bg-white/85 rounded-2xl pb-4 px-2">
          <div className="w-1/4 h-full ">
            <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
          </div>
          <div className="w-3/4 ">
            <h3 className="text-xl py-2 lg:text-3xl">Sandbox Testing Guide</h3>
            <p className="text-black/70 pb-2 text-sm lg:text-lg">
              Learn how to tes and go live with your intergration with the
              PayPal Sandbox.
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold text-[0.9rem] lg:text-xl lg:font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
