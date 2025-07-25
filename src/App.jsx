import React, { useEffect } from "react";
import OuterContainer from "./components/OuterContainer";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <OuterContainer />
    </>
  );
}

export default App;
