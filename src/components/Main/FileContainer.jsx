import React, { useState } from "react";
import SelectedFiles from "./SelectedFiles";

const FileContainer = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="h-[350px] mt[15px]">
      <div className="h-[90%] bg-white mt-[15px] flex flex-col tems-center p-[10px]">
        <div className="flex flex-col justify-center items-center basis-[20%]">
          <p className="text-[22px]">Drag and drop any files</p>
          <label
            htmlFor="fileInput"
            className="text-[blue] text-[22px] hover:cursor-pointer hover:underline"
          >
            Upload
          </label>
          <input
            type="file"
            multiple
            id="fileInput"
            className="hidden"
            onChange={(e) => {
              setFiles([e.target.files]);
            }}
          />
        </div>
        <SelectedFiles selectedFiles={files} setSelectedFiles={setFiles} />
      </div>
    </div>
  );
};

export default FileContainer;
