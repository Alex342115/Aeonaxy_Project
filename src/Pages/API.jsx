import React from "react";
import apiLogo from "../Assests/API.jpg";
import sdkLogo from "../Assests/SDK.jpg";
import whLogo from "../Assests/WH.jpg";

export default function API() {
  return (
    <div className="flex flex-col gap-9 w-full px-10 pt-5 pb-10 bg-neutral-100 ">
      <h1 className="text-[2rem] ">Explore our APIs & SDKs</h1>
      <div className="api-card flex flex-col items-center bg-white/85  rounded-3xl">
        <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl">
          {" "}
          <img
            src={apiLogo}
            alt="API"
            className="w-14 mix-blend-multiply py-4"
          />
        </div>
        <div className="h-4/6 px-5 pb-4">
          {" "}
          <h3 className="text-2xl py-2">APIs</h3>
          <p className="text-black/70 pb-2">
            PayPal offers APIs for new and legacy intergrations
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                REST APIs
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                NVP/SOAP APIs
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Brainttree GraphQL API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sdk-card flex flex-col items-center bg-white/85 rounded-3xl">
        <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl">
          {" "}
          <img
            src={sdkLogo}
            alt="SDK"
            className="w-14 mix-blend-multiply py-4"
          />
        </div>
        <div className="h-4/6 px-5 pb-4">
          {" "}
          <h3 className="text-2xl py-2">SDKs</h3>
          <p className="text-black/70 pb-2">
            Try our SDKs to stremline the intergration experience.
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                JavaScript SDK
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Donate SDK
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Braintree SDKs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="event-card flex flex-col items-center bg-white/85  rounded-3xl">
        <div className="bg-emerald-100 w-full h-1/4 flex items-center justify-center rounded-t-3xl">
          {" "}
          <img
            src={whLogo}
            alt="EVENTS"
            className="w-14 py-4 mix-blend-multiply"
          />
        </div>
        <div className="h-4/6 px-5 pb-4">
          {" "}
          <h3 className="text-2xl py-2">Event Notifications</h3>
          <p className="text-black/70 pb-2">
            Stay informed of PI transaction events with our notifications tools.
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Webhooks
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Instant Payment Notifications(IPN)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold text-[0.9rem]">
                Payment Data Transfer(PDT)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-white/85 rounded-full p-4">
        {" "}
        <p className="text-sm">
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
