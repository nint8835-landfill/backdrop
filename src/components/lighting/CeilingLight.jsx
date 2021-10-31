import PropTypes from "prop-types";
import React from "react";

const CeilingLight = ({ position }) => {
  return (
    <pointLight position={position} color="white" intensity={1} castShadow />
  );
};

CeilingLight.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CeilingLight;
