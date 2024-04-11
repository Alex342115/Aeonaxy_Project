import React from "react";
import PayementLogo from "../Assests/smallpayment2.svg";
import TranscationLogo from "../Assests/smallpayment.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Docs() {
  return (
    <div className="pt-16">
      <div className="docs-top flex flex-col gap-6 bg-blue-950 px-10 py-8">
        <h3 className="title text-white/75 font-light text-base">
          PayPal Developer
        </h3>
        <h1 className=" text-white text-2xl md:text-5xl lg:text-7xl w-full md:w-4/5 lg:w-4/5">
          Build a payment solution that's right for you with PayPal for
          Developers
        </h1>
        <h5 className="text-white/85 font-light text-sm ">
          Whether you're building an inline,mobilr or in-person opayement
          solution, create a PayPal Developer account and find the resources you
          need to test & go live.
        </h5>
        <button className="text-extrabold rounded-full bg-yellow-500 text-blue-950 w-3/6 text-xs p-2">
          {" "}
          Get API Credentials
        </button>
      </div>
      {/* <div className="new-feature">
        <button className="text-extrabold rounded-full bg-yellow-500 text-blue-950 text-sm p-2">
          <FontAwesomeIcon
            icon="fa-solid fa-clock"
            className="border-2 border-red-950"
          />
          Now
        </button>
        <p>
          Explore out Checkout code with the interactive Intergration Builder.
        </p>
        <span>
          <a href="#"> Try it now</a>{" "}
        </span>
      </div> */}
      <div className="flex flex-col gap-5 px-10 py-4 items-center">
        <h1 className="text-3xl">Accept Payments</h1>
        <img src={PayementLogo} alt="PayementLogo" className="w-64" />
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.5rem] pt-2">Online</h3>
          <p className="text-base text-black/60">
            Build a scalable checkout solution for web and mibile iwht our REST
            APIs & JavaScript SDK
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Subsciptions
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Invoicing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.5rem] pt-2">In-Person</h3>
          <p className="text-base text-black/60 ">
            Set up a ready-made point-of-sale solution or intergation a payment
            solution to your serviceSet up a ready-made point-of-sale solution
            or intergation a payment solution to your service
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              {" "}
              <a href="#" className="text-blue-700 font-semibold">
                Point of Sale Solutions
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.5rem]  pt-2">Mutliparty</h3>
          <p className="text-base text-black/60 ">
            Create an onboarding & payments solution for your marketplace or
            payments platformF
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Build a Marketplace
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.5rem] pt-2">3rd-Party</h3>
          <p className="text-base text-black/60">
            Integrate PayPal with a 3rd-party shopping cart or plugin
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold">
                Plugins
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full h-full bg-neutral-100 px-10 py-3">
        <div>
          <h1 className="text-[1.725rem] py-3">Make Payments</h1>
          <h2 className="text-[1.325rem] pb-2">Payouts</h2>
          <p className="text-black/70 text-[14px] pb-5">
            Code a soultion tro sent mass payments to contract
            workers,claimant,freelancers, and sellers around the world.
          </p>
          <a href="#" className="text-blue-700 font-semibold">
            Get started
          </a>
        </div>
        <img
          src={TranscationLogo}
          alt="TranscationLogo"
          className="w-64 mix-blend-multiply text-center"
        />
      </div>

      <div className="px-10 py-5">
        <h1 className="text-[1.725rem] pb-5">Additional Solutions</h1>
        <div>
          <h3 className="text-[1.325rem] pb-1">Disputes</h3>
          <p className=" text-black/70 pb-3">
            Automate oyur dispute managemnet, from initial claim to final
            resolution
          </p>
          <a href="#" className="text-blue-700 font-semibold">
            Get started
          </a>
        </div>
        <div>
          <h3 className="text-[1.325rem] pb-1 pt-4">Reportins</h3>
          <p className=" text-black/70 pb-3">
            Get transaction=level insights to help manage your day-to-day
            operations
          </p>
          <a href="#" className="text-blue-700 font-semibold">
            Get started
          </a>
        </div>
        <div>
          <h3 className="text-[1.325rem] pb-1 pt-4">Identity</h3>
          <p className=" text-black/70 pb-3">
            Let your customers log in to your website using their PayPal
            credentials
          </p>
          <a href="#" className="text-blue-700 font-semibold">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
