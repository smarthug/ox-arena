import { RPC } from "playroomkit";
import { useState } from "react";
import { Hexagon } from "./Hexagon2";

export const HEX_X_SPACING = 2.25;
export const HEX_Z_SPACING = 1.95;
export const NB_ROWS = 7;
export const NB_COLUMNS = 7;
export const FLOOR_HEIGHT = 10;
export const FLOORS = [
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "green",
  },
  {
    color: "yellow",
  },
  {
    color: "purple",
  },
];

export const OXArena = () => {
  const [hexagonHit, setHexagonHit] = useState({});
  const [redHexagonHit, setRedHexagonHit] = useState(false);
  const [blueHexagonHit, setBlueHexagonHit] = useState(false);
  // RPC.register("hexagonHit", (data) => {
  //   setHexagonHit((prev) => ({
  //     ...prev,
  //     [data.hexagonKey]: true,
  //   }));
  // });

  RPC.register("showdown", (num) => {
    // Math.random() < 0.5 ? setRedHexagonHit(true) : setBlueHexagonHit(true);
    // setRedHexagonHit(true);
    // console.log(num)
    if (num > 0.5) {
      setRedHexagonHit(true);
    } else {
      setBlueHexagonHit(true);
    }
  });

  RPC.register("restore", () => {
    setRedHexagonHit(false);
    setBlueHexagonHit(false);
  });

  return (
    <group>
      <Hexagon
        scale={[3, 1, 3]}
        position-y={-0.3}
        color={"red"}
        hit={redHexagonHit}
      />
      <Hexagon
        scale={[3, 1, 3]}
        position-x={2 * HEX_X_SPACING}
        position-y={-0.3}
        color={"blue"}
        hit={blueHexagonHit}
      />
    </group>
  );
};
