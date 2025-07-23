import React from "react";
import Options from "./Options";
import TextContainer from "./TextContainer";
import FileContainer from "./FileContainer";

const Main = () => {
  return (
    <div className="m-t-[10px] w-[100%] p-[20px] h-auto shadow-xl bg-[#f7faf8]">
      <Options />
      {/* <TextContainer /> */}
      <FileContainer />
    </div>
  );
};

export default Main;
