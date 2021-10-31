import React from "react";

const Floor = () => {
  return (
    <mesh position={[-(357 / 2.5), -224 / 2, 179]}>
      <boxGeometry args={[500, 1, 500]} />
      <meshStandardMaterial color="#44403b" />
    </mesh>
  );
};

export default Floor;
