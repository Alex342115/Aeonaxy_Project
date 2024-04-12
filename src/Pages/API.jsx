import React from "react";
import apiLogo from "../Assests/API.jpg";
import sdkLogo from "../Assests/SDK.jpg";
import whLogo from "../Assests/WH.jpg";

export default function API() {
  return (
    <div className="flex flex-col gap-9 w-full px-10 pt-5 pb-10 bg-neutral-100 lg:px-60">
      <h1 className="text-[2rem] lg:text-5xl">Explore our APIs & SDKs</h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:px-10 lg:gap-14 lg:pt-5">
        <div className="api-card flex flex-col drop-shadow-xl items-center bg-white/85  rounded-3xl lg:w-1/3">
          <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl lg:py-5">
            {" "}
            <img
              src={apiLogo}
              alt="API"
              className="w-14 mix-blend-multiply py-4 lg:w-16"
            />
          </div>
          <div className="h-4/6 px-5 pb-4">
            {" "}
            <h3 className="text-2xl py-2 lg:text-3xl lg:py-5">APIs</h3>
            <p className="text-black/70 pb-2 lg:text-lg lg:pb-3">
              PayPal offers APIs for new and legacy intergrations
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  REST APIs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  NVP/SOAP APIs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
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
              className="w-14 mix-blend-multiply py-4 lg:w-16 "
            />
          </div>
          <div className="h-4/6 px-5 pb-4">
            {" "}
            <h3 className="text-2xl py-2 lg:text-3xl lg:py-5">SDKs</h3>
            <p className="text-black/70 pb-2 lg:text-lg lg:pb-3">
              Try our SDKs to stremline the intergration experience.
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  JavaScript SDK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  Donate SDK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
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
              className="w-14 py-4 mix-blend-multiply lg:w-16"
            />
          </div>
          <div className="h-4/6 px-5 pb-4">
            {" "}
            <h3 className="text-2xl py-2 lg:text-3xl lg:py-5">
              Event Notifications
            </h3>
            <p className="text-black/70 pb-2 lg:text-lg lg:pb-3">
              Stay informed of PI transaction events with our notifications
              tools.
            </p>
            <ul className="flex flex-col gap-1 lg:gap-4">
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  Webhooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  Instant Payment Notifications(IPN)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 font-semibold text-[0.9rem] lg:text-lg"
                >
                  Payment Data Transfer(PDT)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-white/85 rounded-full p-4 drop-shadow-xl">
        {" "}
        <p className="text-sm lg:text-lg">
          To browse PayPal SDKs, see our GitHub Library
          <span className="text-blue-500 px-4">
            <a href="#" className="text-blue-500">
              Learn more
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
