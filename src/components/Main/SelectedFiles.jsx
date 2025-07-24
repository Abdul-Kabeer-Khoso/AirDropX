import React from "react";

const SelectedFiles = ({ selectedFiles, setSelectedFiles }) => {
  return (
    <div className="h-[80%] w-[100%]">
      {selectedFiles.length === 0 ? (
        <div className="h-[100%] w-[100%] flex justify-center items-center text-[20px] ">
          No File Selected
        </div>
      ) : (
        <div className="mt-4">
          {selectedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedFiles;
