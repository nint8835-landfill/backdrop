import React from "react";

const Ceiling = () => {
  return (
    <mesh position={[-(357 / 2.5), 224 / 2, 179]}>
      <boxGeometry args={[500, 1, 500]} />
      {/* Benjamin Moore Chantilly Lace */}
      <meshStandardMaterial color="#f5f7f2" />
    </mesh>
  );
};

export default Ceiling;
