import React from "react";
import logo from "../Assests/paypal.svg";
import hamBurger from "../Assests/hamburger.svg";
import cross from "../Assests/cross.svg";

import "../App.css";
export default function Header() {
  const [navVisible, setNavVisible] = React.useState(false);
  const handleToggle = () => {
    console.log("clicked");
    console.log(navVisible);
    setNavVisible(!navVisible);
  };

  return (
    <header className="header bg-white flex z-10 items-start px-5 lg:drop-shadow-2xl fixed top-0 w-full ">
      <div className="w-2/3 flex items-center justify-around">
        <img src={logo} alt="logo" className="comp-logo" />
        <button
          type="button"
          class="inline-flex items-center border-2 border-blue-600 rounded-full px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Search
        </button>
      </div>
      <button
        type="button"
        className="mobile-nav-toggle absolute z-50 top-4 right-7 md:hidden"
        aria-controls="primary-navbar"
        aria-expanded="false"
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
        className={`primary-navbar flex flex-col justify-start items-center gap-8 bg-white/50 backdrop-blur-2xl fixed top-0 right-0 h-full w-3/4  transition-transform duration-500 ${
          navVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul
          id="primary-navbar"
          className="w-full flex flex-col items-start gap-9 font-extrabold pt-5  mt-14 ml-16"
        >
          <li className="nav-links ">
            <a href="#">
              <span aria-hidden="false">Docs</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span aria-hidden="false">APIs & SDKs</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span aria-hidden="false">Tools</span>
            </a>
          </li>
          <li className="nav-links ">
            <a href="#">
              <span aria-hidden="false">Support</span>
            </a>
          </li>
        </ul>
        <button className="log-btn text-xs h-9 text-center rounded-full bg-blue-800  text-white  px-3">
          Log in to Dashboard
        </button>
      </nav>
    </header>
  );
}
