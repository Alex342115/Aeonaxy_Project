import React from "react";
import logo from "../Assests/paypal.svg";
import hamBurger from "../Assests/hamburger.svg";
import cross from "../Assests/cross.svg";

export default function Header() {
  const [navVisible, setNavVisible] = React.useState(false);
  const handleToggle = () => {
    console.log(navVisible);
    setNavVisible(!navVisible);
  };

  return (
    <header
      className="header bg-white flex z-10 items-start px-5 lg:drop-shadow-2xl fixed top-0 
    w-full lg:px-40 "
    >
      <div className="w-2/3 flex items-center justify-around lg:w-1/2 lg:justify-normal lg:gap-24">
        <img
          src={logo}
          alt="logo"
          className="comp-logo lg:w-24 lg:aspect-[3/2] lg:object-cover"
        />
        <button
          type="button"
          class="inline-flex items-center border-2 border-blue-600 rounded-full px-3 py-2 text-sm lg:text-base 
          font-semibold text-blue-600 shadow-sm "
        >
          Search
        </button>
      </div>
      <button
        type="button"
        className="mobile-nav-toggle absolute z-50 top-4 right-7 md:hidden"
        onClick={handleToggle}
      >
        <span>
          {navVisible ? (
            <img src={cross} alt="cross" className="w-8" />
          ) : (
            <img src={hamBurger} alt="hamBurger" className="w-8" />
          )}
        </span>
      </button>
      <nav
        className={`primary-navbar flex flex-col justify-start items-center gap-8
         bg-white/50 backdrop-blur-2xl fixed top-0 right-0 h-full w-3/4  transition-transform duration-500 ${
           navVisible ? "translate-x-0" : "translate-x-full"
         } lg:translate-x-0 lg:flex-row lg:static lg:w-1/2 lg:items-center lg:my-[auto]`}
      >
        <ul
          className="w-full  flex flex-col items-start gap-9 font-extrabold pt-5 mt-14 ml-16 
        lg:flex-row lg:m-0 lg:p-0 lg:w-2/3 lg:justify-center lg:items-center lg:text-lg"
        >
          <li className="nav-links ">
            <a href="#">
              <span>Docs</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span>APIs & SDKs</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span>Tools</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span>Support</span>
            </a>
          </li>
        </ul>
        <button
          className="log-btn text-xs h-9 text-center rounded-full bg-blue-800 
         text-white px-3 lg:w-1/3 lg:text-base"
        >
          Log in to Dashboard
        </button>
      </nav>
    </header>
  );
}
