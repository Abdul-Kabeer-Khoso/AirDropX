import React, { useState } from "react";
import Options from "./Options";
import TextContainer from "./TextContainer";
import FileContainer from "./FileContainer";

const Main = () => {
  const [activeTab, setActiveTab] = useState("text");

  return (
    <div className="m-t-[10px] w-[100%] p-[20px] h-auto shadow-xl bg-[#f7faf8]">
      <Options activeTab={activeTab} changeActiveTab={setActiveTab} />
      {activeTab === "text" ? <TextContainer /> : <FileContainer />}
    </div>
  );
};

export default Main;
