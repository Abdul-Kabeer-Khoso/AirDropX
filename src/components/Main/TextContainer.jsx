import React from "react";

const TextContainer = () => {
  return (
    <div className="h-[340px] mt-[15px]">
      <h2 className="text-3xl mb-[15px]">Enter Text</h2>
      <form className="w-[100%] h-[80%] flex flex-col">
        <textarea
          className="p-[10px] bg-white mb-[5px] border border-dotted rounded-[8px] basis-[75%] text-[20px]"
          placeholder="Type Something"
        ></textarea>
        <button className="bg-[#0097b2] w-[110px] text-3xl rounded-[30px] py-[4px] ml-auto mt-[10px] hover:cursor-pointer hover:text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default TextContainer;
