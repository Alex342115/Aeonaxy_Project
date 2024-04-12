import React from "react";
import PayementLogo from "../Assests/smallpayment2.svg";
import TranscationLogo from "../Assests/smallpayment.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Docs() {
  return (
    <div className="pt-16 ">
      <div className="docs-top flex flex-col gap-6 bg-blue-950 px-10 py-8 lg:min-h-96 lg:gap-10 lg:px-60 lg:py-12 ">
        <h3 className="title text-white/75 font-light text-base lg:text-3xl lg:text-white/65 ">
          PayPal Developer
        </h3>
        <h1 className=" text-white text-2xl md:text-3xl lg:text-5xl w-full md:w-4/5 lg:w-4/5">
          Build a payment solution that's right for you with PayPal for
          Developers
        </h1>
        <h5 className="text-white/85 font-light text-sm lg:text-xl lg:w-3/5 lg:text-white/60">
          Whether you're building an inline,mobilr or in-person opayement
          solution, create a PayPal Developer account and find the resources you
          need to test & go live.
        </h5>
        <button className="text-extrabold rounded-full bg-yellow-500 text-blue-950 w-3/6 text-xs p-2 md:w-2/6 md:text-base  lg:w-1/6">
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
      <div className="grid lg:grid-rows-[5rem_1fr_1fr] lg:grid-cols-3  gap-2 px-10 py-4 lg:px-60">
        <h1 className="text-3xl lg:self-center lg:justify-self-start lg:text-5xl">
          Accept Payments
        </h1>
        <img
          src={PayementLogo}
          alt="PayementLogo"
          className="w-64 lg:col-start-3 lg:row-span-full lg:w-5/6 place-self-center"
        />
        <div className="flex flex-col gap-2 lg:row-start-2">
          <h3 className="text-[1.5rem] pt-2 lg:text-3xl">Online</h3>
          <p className="text-base text-black/60 lg:text-lg">
            Build a scalable checkout solution for web and mibile iwht our REST
            APIs & JavaScript SDK
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Subsciptions
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Invoicing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-2 lg:col-start-2">
          <h3 className="text-[1.5rem] pt-2 lg:text-3xl">In-Person</h3>
          <p className="text-base text-black/60 lg:text-lg">
            Set up a ready-made point-of-sale solution or intergation a payment
            solution to your serviceSet up a ready-made point-of-sale solution
            or intergation a payment solution to your service
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              {" "}
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Point of Sale Solutions
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-3 lg:col-start-1">
          <h3 className="text-[1.5rem] pt-2 lg:text-3xl">Mutliparty</h3>
          <p className="text-base text-black/60 lg:text-lg">
            Create an onboarding & payments solution for your marketplace or
            payments platformF
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Build a Marketplace
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-3 lg:col-start-2">
          <h3 className="text-[1.5rem] pt-2 lg:text-3xl ">3rd-Party</h3>
          <p className="text-base text-black/60 lg:text-lg">
            Integrate PayPal with a 3rd-party shopping cart or plugin
          </p>
          <ul className="flex flex-wrap gap-5 lg:flex-col lg:gap-3">
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-semibold lg:text-lg">
                Plugins
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------Make Payements---------------- */}
      <div className=" flex flex-col items-center gap-4 bg-neutral-100 px-10 py-3 lg:flex-row-reverse lg:px-60 lg:justify-center">
        <div>
          <h1 className="text-[1.725rem] py-3 lg:text-5xl lg:pb-8">
            Make Payments
          </h1>
          <h2 className="text-[1.325rem] pb-2 lg:text-[2.25rem]">Payouts</h2>
          <p className="text-black/70 text-[14px] pb-5 lg:w-96">
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
          className="w-64 text-center lg:w-[24rem]"
        />
      </div>

      <div className="px-10  py-5 lg:px-60 lg:pb-14 ">
        <h1 className="text-[1.725rem] pb-5 lg:text-4xl lg:pt-5 lg:pb-10">
          Additional Solutions
        </h1>
        <div className="flex flex-col  lg:flex-row lg:gap-14">
          <div>
            <h3 className="text-[1.325rem] pb-1 lg:text-3xl">Disputes</h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Automate oyur dispute managemnet, from initial claim to final
              resolution
            </p>
            <a href="#" className="text-blue-700 font-semibold">
              Get started
            </a>
          </div>
          <div>
            <h3 className="text-[1.325rem] pb-1 pt-4 lg:pt-0 lg:text-3xl">
              Reportins
            </h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Get transaction level insights to help manage your day-to-day
              operations
            </p>
            <a href="#" className="text-blue-700 font-semibold">
              Get started
            </a>
          </div>
          <div>
            <h3 className="text-[1.325rem] pb-1 pt-4 lg:pt-0 lg:text-3xl">
              Identity
            </h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Let your customers log in to your website using their PayPal
              credentials
            </p>
            <a href="#" className="text-blue-700 font-semibold">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
