import PropTypes from "prop-types";
import React from "react";

const CeilingLight = ({ position }) => {
  return (
    <pointLight
      position={position}
      color="white"
      intensity={100000}
      castShadow
      decay={2}
    />
  );
};

CeilingLight.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CeilingLight;
