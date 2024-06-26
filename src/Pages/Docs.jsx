import React from "react";
import PayementLogo from "../Assests/smallpayment2.svg";
import TranscationLogo from "../Assests/smallpayment.svg";

export default function Docs() {
  return (
    <div id="docs" className="pt-16 ">
      <div className="docs-top flex flex-col gap-6 bg-blue-950 px-10 py-8 md:px-24 lg:min-h-96 lg:gap-10 lg:px-60 lg:py-12 ">
        <h3 className="title text-white/75 font-light text-base md:text-xl lg:text-3xl lg:text-white/65 ">
          PayPal Developer
        </h3>
        <h1 className=" text-white text-2xl md:text-3xl lg:text-5xl w-full md:w-4/5 lg:w-4/5">
          Build a payment solution that's right for you with PayPal for
          Developers
        </h1>

        <h5 className="text-white/85 font-light text-sm md:text-base md:w-5/6 lg:text-xl lg:w-3/5 lg:text-white/60">
          Whether you're building an inline,mobilr or in-person opayement
          solution, create a PayPal Developer account and find the resources you
          need to test & go live.
        </h5>
        <button className="text-extrabold rounded-full bg-yellow-500 text-blue-950 w-3/6 text-xs p-2 md:w-2/6 md:text-lg  lg:w-1/6">
          {" "}
          Get API Credentials
        </button>
      </div>
      <div
        className=" new-feature relative border-2 bg-neutral-100 rounded-full flex items-center gap-3 
        my-4 mx-10 p-2 md:mx-16 lg:gap-5 lg:mx-64 "
      >
        <div className="flex gap-1 items-center bg-violet-200 rounded-full h-full p-2">
          <svg
            className="w-4 md:w-6 lg:w-8"
            fill="#7F00FF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 
            7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
            />
          </svg>
          <p className="text-xs md:text-lg">New</p>
        </div>
        <p className="text-xs md:text-lg">
          Explore out Checkout code with the interactive Intergration Builder.
          <span>
            <a className="text-blue-500" href="#api">
              {" "}
               Try it now
            </a>
          </span>
        </p>
        <button
          type="button"
          class="feedback absolute -right-[4.5rem] py-0.5 px-2 bg-blue-200 text-xs font-bold -rotate-90 rounded
         md:text-sm md:-right-24 lg:-right-72"
        >
          Feedback
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 px-10 py-4 md:flex-row  md:px-20 lg:px-60">
        <div className=" pb-5 md:w-2/3">
          <h1 className="text-3xl py-5 lg:text-5xl">Accept Payments</h1>
          <div className="md:flex md:flex-wrap gap-4">
            <div className="flex flex-col gap-2 md:max-w-[45%]">
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
                Build a scalable checkout solution for web and mibile iwht our
                REST APIs & JavaScript SDK
              </p>
              <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
                <li>
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Checkout
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Subsciptions
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Invoicing
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[45%]">
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
                Set up a ready-made point-of-sale solution or intergation a
                payment solution to your serviceSet up a ready-made
                point-of-sale solution or intergation a payment solution to your
                service
              </p>
              <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
                <li>
                  {" "}
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Point of Sale Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[45%]">
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
                  <a
                    href="#docsdocs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Build a Marketplace
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[45%]">
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
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-blue-700 font-semibold lg:text-lg"
                  >
                    Plugins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <img src={PayementLogo} alt="PayementLogo" className="w-64" />
        </div>
      </div>
      {/* ----------------Make Payements---------------- */}
      <div className=" flex flex-col items-center gap-4 bg-neutral-100 px-10 py-3 md:px-24 lg:flex-row-reverse lg:px-60 lg:justify-center lg:py-12">
        <div>
          <h1 className="text-[1.725rem] py-3 md:text-3xl md:pb-5 lg:text-5xl lg:pb-8">
            Make Payments
          </h1>
          <h2 className="text-[1.325rem] pb-2 md:text-[1.5rem] md:pb-4 lg:text-[2.25rem]">
            Payouts
          </h2>
          <p className="text-black/70 text-[14px] md:text-[16px] pb-5 lg:w-96 lg:text-lg">
            Code a soultion tro sent mass payments to contract workers,
            claimant, freelancers, and sellers around the world.
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
      {/* ----------------Solutions---------------- */}
      <div className="px-10  py-5 md:px-24 md:pb-10 lg:px-60 lg:pb-14  ">
        <h1 className="text-[1.725rem] pb-5 lg:text-4xl lg:pt-5 lg:pb-10">
          Additional Solutions
        </h1>
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-14">
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
            <h3 className="text-[1.325rem] mb-1 mt-4 flex gap-4 lg:pt-0 lg:text-3xl md:mt-0">
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
            <h3 className="text-[1.325rem] mb-1 mt-4 flex gap-4 lg:pt-0 lg:text-3xl md:mt-0">
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
