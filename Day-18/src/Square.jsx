import React from "react";
import "./styles.css";

function Square(props) {
  const { colorClass } = props;
  return <div className={colorClass}></div>;
}

export default Square;
