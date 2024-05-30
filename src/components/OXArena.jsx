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
    console.log(num)
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
        // key={columnIndex}
        // position-x={columnIndex * HEX_X_SPACING}
        position-y={-0.3}
        color={"red"}
        onHit={() => {
          // const hexagonKey = `${floorIndex}-${rowIndex}-${columnIndex}`;
          // setHexagonHit((prev) => ({
          //   ...prev,
          //   [hexagonKey]: true,
          // }));
          // RPC.call("hexagonHit", { hexagonKey }, RPC.Mode.ALL);
        }}
        // hit={hexagonHit[`${floorIndex}-${rowIndex}-${columnIndex}`]}
        hit={redHexagonHit}
      />
      <Hexagon
        scale={[3, 1, 3]}
        // key={columnIndex}
        position-x={2 * HEX_X_SPACING}
        position-y={-0.3}
        color={"blue"}
        onHit={() => {
          // const hexagonKey = `${floorIndex}-${rowIndex}-${columnIndex}`;
          // setHexagonHit((prev) => ({
          //   ...prev,
          //   [hexagonKey]: true,
          // }));
          // RPC.call("hexagonHit", { hexagonKey }, RPC.Mode.ALL);
        }}
        // hit={hexagonHit[`${floorIndex}-${rowIndex}-${columnIndex}`]}
        hit={blueHexagonHit}
      />
    </group>
  );
};
