import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {
  const [color, setColor] = useState("null");
  return (
    <>
      <div className="trafficTop"></div>
      <div className="lightbox">
        <div
          className={color == "red" ? "red" : "redlite"}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={color == "yellow" ? "yellow" : "yellowlite"}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={color == "green" ? "green" : "greenlite"}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </>
  );
};

export default Home;
