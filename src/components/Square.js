import React from "react";

const squareStyles = {
//   background: "white",
//   border: "1px solid lightgrey",
  fontSize: "50px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => {
  return (
    <button className="bg-white border border-light" style={squareStyles} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
