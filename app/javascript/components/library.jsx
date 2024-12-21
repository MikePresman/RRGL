import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const library = () => {
  const [counter, setCounter] = useState(0);

  const handleBtnClick = () => {
    console.log(counter)
    setCounter(counter + 1)
  }
  return (
    <>
      <button onClick={handleBtnClick}>Hello World</button>

      <div className="bg-red-500 w-50 h-25">hey</div>
    </>
  )
}

export default library;
