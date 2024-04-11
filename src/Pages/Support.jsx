import React from "react";

export default function Support() {
  return (
    <div className="support px-10 flex flex-col gap-3 py-5">
      <h1 className="text-3xl">Looking for something else?</h1>
      <p className="text-sm">
        If you need additional help, check out Support articles, community
        resources, and more.
      </p>
      <button className="rounded-full bg-blue-900 text-white text-sm p-1 px-4 font-extralight w-2/5 mx-[auto]">
        Find Support
      </button>
      <ul className="flex justify-between">
        <li>
          <a href="#" className="font-semibold text-sm">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-sm">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-sm">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-sm">
            Docs Archive
          </a>
        </li>
      </ul>
    </div>
  );
}
