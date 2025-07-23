import React from "react";
import { LuLetterText } from "react-icons/lu";
import { BsFiles } from "react-icons/bs";

const Options = () => {
  return (
    <div className="flex justify-between w-[100%] h-[70px] bg-teal-600">
      <div className="w-[50%] flex justify-center items-center">
        <LuLetterText className="text-4xl" />
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <BsFiles className="text-4xl" />
      </div>
    </div>
  );
};

export default Options;
