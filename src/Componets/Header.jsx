import React from "react";
import logo from "../Assests/paypal.svg";
import hamBurger from "../Assests/hamburger.svg";
import cross from "../Assests/cross.svg";

import "../App.css";
export default function Header() {
  const [navVisible, setNavVisible] = React.useState(false);
  const handleToggle = () => {
    console.log("clicked");
    setNavVisible(!navVisible);
  };

  return (
    <header className="header  bg-white flex justify-between items-start px-5 fixed top-0 w-full ">
      <img src={logo} alt="logo" className="comp-logo" />
      <button
        className="mobile-nav-toggle absolute z-50 top-5 right-7 md:hidden"
        aria-controls="primary-navbar"
        aria-expanded="false"
        onClick={handleToggle}
      >
        <span>
          <img src={hamBurger} alt="hamBurger" className="w-8" />
        </span>
      </button>
      <div className="search-bar">Search </div>
      <nav
        className={`primary-navbar flex flex-col justify-start items-center gap-8 fixed bg-white/50 backdrop-blur-2xl left-1/4 inset-0 translate-x-full transition-transform duration-500 ${
          navVisible ? "translate-x-0 transition-transform duration-500" : ""
        } `}
        data-visible="false"
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
