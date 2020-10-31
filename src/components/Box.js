import React from "react";
import Square from "./Square";

const boxStyle = {
  border: "1px solid grey",
  borderRadius: "2px",
  display: "grid",
  width: "30vw",
  height: "50vh",
  margin: "auto",
  gridTemplate: "repeat(3,1fr) / repeat(3, 1fr)",
};

const Box = ({ squares, onClick }) => {
  return (
      <div style={boxStyle}>
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
  );
};

export default Box;
