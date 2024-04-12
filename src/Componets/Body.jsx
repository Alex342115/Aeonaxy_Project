import React from "react";
import Docs from "../Pages/Docs";
import API from "../Pages/API";
import Tools from "../Pages/Tools";
import Support from "../Pages/Support";
import ScrollToHashElement from "./ScrollToHashElement";

export default function Body() {
  return (
    <div className="main">
      <ScrollToHashElement />
      <Docs />
      <API />
      <Tools />
      <Support />
    </div>
  );
}
