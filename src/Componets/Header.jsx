import React from "react";
import logo from "../Assests/paypal.svg";
import "../App.css";
export default function Header() {
  return (
    <header className="header  bg-white flex justify-between items-start px-5 fixed top-0 w-full ">
      <img src={logo} alt="logo" className="comp-logo" />
      <button
        className=" mobile-nav-togg le md:hidden border-2 border-red-600"
        aria-controls="primary-navbar"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>
      <div className="search-bar">Search </div>
      <nav
        className="primary-navbar flex flex-col justify-start items-center gap-8 fixed bg-white/95  left-1/4 inset-0"
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
