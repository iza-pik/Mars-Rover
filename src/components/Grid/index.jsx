import React from "react";
import Cell from "../Cell";
import Rover from "../Rover";
import "./Grid.css";

const gridData = [];

for (let y = 0; y < 10; y++) {
  const row = [];
  for (let x = 0; x < 10; x++) row.push(undefined);
  gridData.push(row);
}

const Grid = ({ roverState }) => {
  return (
    <div className="grid">
      {gridData.map((row, y) => (
        <div className="row">
          {row.map((_, x) => (
            <Cell key={x + y}>
              {x === roverState.x && y === roverState.y ? (
                <Rover dir={roverState.dir} />
              ) : null}
            </Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
