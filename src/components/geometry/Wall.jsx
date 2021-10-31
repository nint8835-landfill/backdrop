import PropTypes from "prop-types";
import React from "react";

const Wall = ({ width, position, rotation }) => {
  return (
    <mesh position={position} rotation={[0, rotation, 0]}>
      <boxGeometry args={[width, 224, 10]} />
      {/* Benjamin Moore Waynesboro Taupe */}
      <meshStandardMaterial color="#A6998C" />
    </mesh>
  );
};

Wall.propTypes = {
  width: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.number.isRequired,
};

export default Wall;
