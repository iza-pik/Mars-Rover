import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Grid from "./components/Grid/index.jsx";
import starrySky from "./assets/images/skyStarsPattern.jpg";

const App = () => {
  const [roverState, setRoverState] = useState({ x: 0, y: 0, dir: 0 });
  const [path, setPath] = useState("");
  const onPathChange = (e) => {
    setPath(e.target.value.replace(/[^lfr]/gi, "").toLowerCase());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let { dir, x, y } = roverState;
    for (let i = 0; i < path.length; i++) {
      /* eslint no-loop-func: "off" */
      setTimeout(() => {
        if (path[i] === "l") {
          dir = roverState.dir === 0 ? 3 : (roverState.dir -= 1);
        } else if (path[i] === "r") {
          dir = roverState.dir > 3 ? 0 : (roverState.dir += 1);
        } else if (path[i] === "f") {
          switch (dir) {
            // N:
            case 0:
              if (y > 0) {
                y--;
              }
              break;
            // E:
            case 1:
              if (x < 9) {
                x++;
              }
              break;
            // S:
            case 2:
              if (y < 9) {
                y++;
              }
              break;
            // W:
            case 3:
              if (x > 0) {
                x--;
              }
              break;
            default:
              break;
          }
        }
        setRoverState({ x, y, dir });
      }, 500 * i);
    }
  };

  return (
    <div className="app">
      <div className="mars">
        <Grid roverState={roverState} />
      </div>
      <div className="space" style={{ backgroundImage: `url(${starrySky})` }}>
        <Controls value={path} onChange={onPathChange} onSubmit={onSubmit} />
        <h2>
          Steer the Mars Rover by typing in a path using the following commands:
        </h2>
        <ul>
          <li>f: to move forward</li>
          <li>r: to turn right</li>
          <li>l: to turn left</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
