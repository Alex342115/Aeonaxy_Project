import React from "react";
import PayementLogo from "../Assests/smallpayment2.svg";
import TranscationLogo from "../Assests/smallpayment.svg";

export default function Docs() {
  return (
    <div id="docs" className="pt-16 ">
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
          <h3 className="text-[1.5rem] mt-2 flex gap-4 lg:text-3xl">
            <svg
              className="w-5 pt-1 lg:w-7"
              fill="#0080FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 
              0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 
              416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
              />
            </svg>
            Online
          </h3>
          <p className="text-base text-black/60 lg:text-lg">
            Build a scalable checkout solution for web and mibile iwht our REST
            APIs & JavaScript SDK
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Checkout
              </a>
            </li>
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Subsciptions
              </a>
            </li>
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Invoicing
              </a>
            </li>
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-2 lg:col-start-2">
          <h3 className="text-[1.5rem] mt-2 flex gap-4 lg:text-3xl ">
            <svg
              className="w-5 pt-1 lg:w-7"
              fill="#0080FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 
              0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 
              16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 
              64 32 32 0 1 1 0-64z"
              />
            </svg>
            In-Person
          </h3>
          <p className="text-base text-black/60 lg:text-lg">
            Set up a ready-made point-of-sale solution or intergation a payment
            solution to your serviceSet up a ready-made point-of-sale solution
            or intergation a payment solution to your service
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              {" "}
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Point of Sale Solutions
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-3 lg:col-start-1">
          <h3 className="text-[1.5rem] mt-2 flex gap-4 lg:text-3xl">
            <svg
              className="w-5 pt-1 lg:w-7"
              fill="#0080FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 
              96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>
            Mutliparty
          </h3>
          <p className="text-base text-black/60 lg:text-lg">
            Create an onboarding & payments solution for your marketplace or
            payments platformF
          </p>
          <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
            <li>
              <a href="#docsdocs" className="text-blue-700 font-semibold lg:text-lg">
                Build a Marketplace
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:row-start-3 lg:col-start-2">
          <h3 className="text-[1.5rem] mt-2 flex gap-4 lg:text-3xl ">
            <svg
              className="w-5 pt-1 lg:w-7"
              fill="#0080FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 
              40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 
              384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 
              .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 
              10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            3rd-Party
          </h3>
          <p className="text-base text-black/60 lg:text-lg">
            Integrate PayPal with a 3rd-party shopping cart or plugin
          </p>
          <ul className="flex flex-wrap gap-5 lg:flex-col lg:gap-3">
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Partners
              </a>
            </li>
            <li>
              <a href="#docs" className="text-blue-700 font-semibold lg:text-lg">
                Plugins
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------Make Payements---------------- */}
      <div className=" flex flex-col items-center gap-4 bg-neutral-100 px-10 py-3 lg:flex-row-reverse lg:px-60 lg:justify-center lg:py-12">
        <div>
          <h1 className="text-[1.725rem] py-3 lg:text-5xl lg:pb-8">
            Make Payments
          </h1>
          <h2 className="text-[1.325rem] pb-2 lg:text-[2.25rem]">Payouts</h2>
          <p className="text-black/70 text-[14px] pb-5 lg:w-96 lg:text-lg">
            Code a soultion tro sent mass payments to contract
            workers,claimant,freelancers, and sellers around the world.
          </p>
          <a href="#docs" className="text-blue-700 font-semibold lg:text-xl">
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
        <div className="flex flex-col lg:flex-row lg:gap-14">
          <div>
            <h3 className="text-[1.325rem] mb-1 flex gap-4 lg:text-3xl">
              <svg
                className="w-4 pt-1 lg:w-6"
                fill="#0080FF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 
                32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 
                20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 
                0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
                />
              </svg>
              Disputes
            </h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Automate oyur dispute managemnet, from initial claim to final
              resolution
            </p>
            <a href="#docs" className="text-blue-700 font-semibold lg:text-xl">
              Get started
            </a>
          </div>
          <div>
            <h3 className="text-[1.325rem] mb-1 mt-4 flex gap-4 lg:pt-0 lg:text-3xl lg:mt-0">
              <svg
                className="w-5 pt-1 lg:w-6"
                fill="#0080FF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 
                0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 
                352v64h64V352H64zm384 0H192v64H448V352z"
                />
              </svg>
              Reportins
            </h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Get transaction level insights to help manage your day-to-day
              operations
            </p>
            <a href="#docs" className="text-blue-700 font-semibold lg:text-xl">
              Get started
            </a>
          </div>
          <div>
            <h3 className="text-[1.325rem] mb-1 mt-4 flex gap-4 lg:pt-0 lg:text-3xl lg:mt-0">
              <svg
                className="w-5 pt-1 lg:w-7"
                fill="#0080FF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 
                64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 
                10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 
                16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 
                16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 
                0-16-7.2-16-16z"
                />
              </svg>{" "}
              Identity
            </h3>
            <p className=" text-black/70 pb-3 lg:text-lg lg:pt-2 lg:pb-6">
              Let your customers log in to your website using their PayPal
              credentials
            </p>
            <a href="#docs" className="text-blue-700 font-semibold lg:text-xl">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
