import React from "react";
import apiLogo from "../Assests/API.jpg";
import sdkLogo from "../Assests/SDK.jpg";
import whLogo from "../Assests/WH.jpg";

export default function API() {
  return (
    <div
      id="api"
      className="flex flex-col gap-9 w-full px-10 pt-5 pb-10 bg-neutral-100 md:px-24 lg:px-60"
    >
      <h1 className="text-[2rem] lg:text-5xl">Explore our APIs & SDKs</h1>
      <div className="flex flex-col gap-4 md:px-16 md:gap-8 lg:flex-row lg:px-10 lg:gap-14 lg:pt-5">
        <div className="api-card flex flex-col drop-shadow-xl items-center bg-white/85  rounded-3xl lg:w-1/3">
          <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl lg:py-5">
            {" "}
            <img
              src={apiLogo}
              alt="API"
              className="w-14 mix-blend-multiply py-4 md:w-16"
            />
          </div>
          <div className="h-4/6 px-5 pb-4 md:pb-6">
            {" "}
            <h3 className="text-2xl py-2 md:py-3 lg:text-3xl lg:py-5">APIs</h3>
            <p className="text-black/70 pb-2 lg:text-lg lg:pb-3">
              PayPal offers APIs for new and legacy intergrations
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  REST APIs
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  NVP/SOAP APIs
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Brainttree GraphQL API
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sdk-card flex flex-col items-center drop-shadow-xl bg-white/85 rounded-3xl lg:w-1/3">
          <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl lg:py-5">
            {" "}
            <img
              src={sdkLogo}
              alt="SDK"
              className="w-14 mix-blend-multiply py-4 md:w-16 "
            />
          </div>
          <div className="h-4/6 px-5 pb-4 md:mb-3">
            {" "}
            <h3 className="text-2xl py-2 md:py-3 lg:py-5 lg:text-3xl">SDKs</h3>
            <p className="text-black/70 pb-2  lg:text-lg lg:pb-3">
              Try our SDKs to stremline the intergration experience.
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  JavaScript SDK
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Donate SDK
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Braintree SDKs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="event-card flex flex-col items-center drop-shadow-xl bg-white/85  rounded-3xl lg:w-1/3">
          <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl lg:py-5">
            {" "}
            <img
              src={whLogo}
              alt="EVENTS"
              className="w-14 mix-blend-multiply py-4 md:w-16"
            />
          </div>
          <div className="h-4/6 px-5 pb-4 md:pb-6">
            {" "}
            <h3 className="text-2xl py-2  md:py-3 lg:text-3xl lg:py-5">
              Event Notifications
            </h3>
            <p className="text-black/70 pb-2 lg:text-lg lg:pb-3">
              Stay informed of PI transaction events with our notifications
              tools.
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Webhooks
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Instant Payment Notifications(IPN)
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-blue-700 font-semibold text-[0.9rem] md:text-base lg:text-lg"
                >
                  Payment Data Transfer(PDT)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-full flex justify-center items-center gap-2 bg-white/85  rounded-full 
      p-4 drop-shadow-xl md:justify-start lg:gap-6"
      >
        {" "}
        <svg
          className="w-14 md:w-9 lg:w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 
            5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 
            6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 
            3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 
            110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 
            15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 
            58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 
            23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 
            96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 
            17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 
            .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 
            2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 
            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 
            .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 
            2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>{" "}
        <p className="text-sm md:text-base lg:text-xl">
          To browse PayPal SDKs, see our GitHub Library
          <span className="text-blue-500 px-4 lg:px-6">
            <a href="https://github.com/Alex342115" className="text-blue-500">
              Learn more
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
