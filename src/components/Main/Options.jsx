import React from "react";
import { LuLetterText } from "react-icons/lu";
import { BsFiles } from "react-icons/bs";

const Options = ({ activeTab, changeActiveTab }) => {
  return (
    <div className="flex justify-between w-[100%] h-[70px]">
      <div
        className={`w-[50%] flex justify-center items-center ${
          activeTab === "text" && "bg-white text-[#0097b2]"
        } hover:bg-white hover:cursor-pointer hover:text-[#0097b2]`}
        onClick={() => changeActiveTab("text")}
      >
        <LuLetterText className="text-4xl" />
      </div>
      <div
        className={`w-[50%] flex justify-center items-center ${
          activeTab === "file" && "bg-white text-[#0097b2]"
        } hover:bg-white hover:cursor-pointer hover:text-[#0097b2]`}
        onClick={() => changeActiveTab("file")}
      >
        <BsFiles className="text-4xl" />
      </div>
    </div>
  );
};

export default Options;
