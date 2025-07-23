import React from "react";

const FileContainer = () => {
  return (
    <div className="h-[350px] mt[15px]">
      <div className="h-[90%] bg-white mt-[15px] flex flex-col justify-center items-center">
        <p className="text-[20px]">Drag and drop any files</p>
        <label
          htmlFor="fileInput"
          className="text-[blue] text-[22px] hover:cursor-pointer hover:underline"
        >
          Upload
        </label>
        <input type="file" id="fileInput" className="hidden" />
      </div>
    </div>
  );
};

export default FileContainer;
