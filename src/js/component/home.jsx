import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {
  const [color, setcolor] = useState("");
  return (
    <>
      <div className="trafficTop"></div>
      <div className="lightbox">
        <div
          className={color == "red" ? "redlit" : "red"}
          onClick={() => setcolor("red")}
        ></div>
        <div
          className={color == "yellow" ? "yellowlit" : "yellow"}
          onClick={() => setcolor("yellow")}
        ></div>
        <div
          className={color == "green" ? "greenlit" : "green"}
          onClick={() => setcolor("green")}
        ></div>
      </div>
    </>
  );
};

export default Home;
