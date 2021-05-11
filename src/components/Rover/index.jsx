import React from "react";
import "./Rover.css";

const Rover = ({ dir }) => (
  <div style={{ transform: `rotate(${dir * 90}deg)` }} className="rover">
    ^
  </div>
);

export default Rover;
