import React from "react";
import CeilingLight from "../lighting/CeilingLight";
import Ceiling from "./Ceiling";
import Floor from "./Floor";
import Wall from "./Wall";

const Room = () => {
  return (
    <>
      {/* Back wall (window wall) */}
      <Wall width={147} position={[0, 0, 0]} rotation={0} />
      {/* Back left wall */}
      <Wall
        width={128}
        position={[-(147 / 2 + 10 / 2), 0, 128 / 2 + 10 / 2]}
        rotation={Math.PI / 2}
      />
      {/* Middle back wall (hatch wall) */}
      <Wall
        width={136}
        position={[-(147 / 2 + 10 / 2 + 136 / 2), 0, 128]}
        rotation={0}
      />
      {/* Middle left wall */}
      <Wall
        width={79}
        position={[
          -(147 / 2 + 10 / 2 + 136 + 10 / 2),
          0,
          128 + 79 / 2 + 10 / 2,
        ]}
        rotation={Math.PI / 2}
      />
      {/* Closet wall */}
      <Wall
        width={69}
        position={[-(147 / 2 + 10 / 2 + 136 + 69 / 2), 0, 128 + 79]}
        rotation={0}
      />
      {/* Right wall */}
      <Wall
        width={386}
        position={[147 / 2 + 10 / 2, 0, 386 / 2 + 10 / 2]}
        rotation={Math.PI / 2}
      />
      {/* Left wall */}
      <Wall
        width={179}
        position={[
          -(147 / 2 + 10 / 2 + 136 + 69 + 10 / 2),
          0,
          128 + 79 + 179 / 2 + 10 / 2,
        ]}
        rotation={Math.PI / 2}
      />
      {/* Front wall */}
      <Wall
        width={357}
        position={[-(357 / 2 - 147 / 2), 0, 386 + 10]}
        rotation={0}
      />
      <CeilingLight position={[-(147 / 2 + 10), 224 / 2 - 15, 128 + 79 + 30]} />

      <Floor />
      <Ceiling />
    </>
  );
};

export default Room;
