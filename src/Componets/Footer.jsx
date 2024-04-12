import React from "react";

export default function Footer() {
  return (
    <div className="footer px-10 border-t-2 border-black/5 lg:px-60 lg:py-2">
      <ul className="flex flex-wrap gap-4 justify-around lg:justify-end lg:gap-20">
        <li className="text-sm lg:text-lg">Reference</li>
        <li className="text-sm lg:text-lg">PayPal.com</li>
        <li className="text-sm lg:text-lg">Privacy</li>
        <li className="text-sm lg:text-lg">Support</li>
        <li className="text-sm lg:text-lg">Legal</li>
        <li className="text-sm lg:text-lg">Contract</li>
      </ul>
    </div>
  );
}
