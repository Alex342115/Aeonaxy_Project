import React from "react";
import sofaLogo from "../Assests/developeronsofa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tools() {
  return (
    <div className="tools flex flex-col gap-2 w-full px-10 pt-5 pb-10 bg-orange-100/85">
      <div>
        <h1 className="text-3xl">Developer Tools & Resources</h1>
        <img src={sofaLogo} alt="sofaLogo" className="w-48 mx-[auto]" />
      </div>
      <div className="flex flex-col gap-3 justify-between">
        <div className="portal flex bg-white/85 rounded-2xl pb-4 px-2">
          <div className="w-1/4 h-full ">
            <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
          </div>
          <div className="w-3/4 ">
            <h3 className="text-xl py-2">Demo portal</h3>
            <p className="text-black/70 pb-2 text-sm">
              Explore PayPal product experiences from the customer's perspective
            </p>
            <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
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
            <h3 className="text-xl py-2">API Executor</h3>
            <p className="text-black/70 pb-2 text-sm">
              Try out PayPal API request and response in multiple porgramming
              languages.
            </p>
            <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
              Try APIs
            </a>
          </div>
        </div>
        <div className="testing flex bg-white/85 rounded-2xl pb-4 px-2">
          <div className="w-1/4 h-full ">
            <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
          </div>
          <div className="w-3/4 ">
            <h3 className="text-xl py-2">Sandbox Testing Guide</h3>
            <p className="text-black/70 pb-2 text-sm">
              Learn how to tes and go live with your intergration with the
              PayPal Sandbox.
            </p>
            <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
