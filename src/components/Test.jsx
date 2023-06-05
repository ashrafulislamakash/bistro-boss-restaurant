import React from "react";

import dc from "../assets/dc.svg";

const Test = () => {
  return (
    <div className="bg-[#1D252C] flex  justify-between container p-3 ps-6 border  border-[#2E353B] rounded-full  z-50 fixed bottom-2 mx-auto left-0  right-0">
      <img src={dc} alt="" />

      <div className="flex justify-center  items-center text-white gap-8 de">
        <li>Work</li>
        <li>Work</li>
        <li>Work</li>
        <li>Work</li>
        <li>Work</li>
      </div>

      <button className="py-4 px-8 rounded-full font-medium text-xl bg-[#B6F214]">
        Get Started
      </button>
    </div>
  );
};

export default Test;
