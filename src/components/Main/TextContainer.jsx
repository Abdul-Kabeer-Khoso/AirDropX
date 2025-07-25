import React, { useState } from "react";

const TextContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/sendMessage", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ textData: inputText }),
      });
      if (!response.ok) {
        const errorData = response.json();
        throw new Error(errorData.message);
      }

      const backendResponse = await response.text();
      console.log(`backend response: ${backendResponse}`);

      setInputText("");
    } catch (err) {
      console.log(`Error sending data to backend: ${err}`);
    }
  };

  return (
    <div className="h-[340px] mt-[15px]">
      <h2 className="text-3xl mb-[15px]">Enter Text</h2>
      <form
        className="w-[100%] h-[80%] flex flex-col"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <textarea
          className="p-[10px] bg-white mb-[5px] border border-dotted rounded-[8px] basis-[75%] text-[20px]"
          placeholder="Type Something"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button className="bg-[#0097b2] w-[110px] text-3xl rounded-[30px] py-[4px] ml-auto mt-[10px] hover:cursor-pointer hover:text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default TextContainer;
