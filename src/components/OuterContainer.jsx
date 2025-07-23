import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function OuterContainer() {
  return (
    <div className="w-[60vw] h-auto mx-auto my-[5vh] border-1 p-[10px]">
      <Header />
      <Main />
    </div>
  );
}

export default OuterContainer;
