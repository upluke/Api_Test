import React from "react";

 

export const Star:React.FC<any>=({
  value,
  color,
  handleHover,
  handleHoverLeave,
  handleClick,
  isFilled
})=> {
  if (!handleHover) {
    return (
      <span
        className="Star"
        style={{ color }}
        onMouseEnter={() => console.log("HOVERED IN")}
        onMouseLeave={() => console.log("HOVERED OUT")}
        onClick={() => alert("CLICKED A STAR!")}
      >
        {isFilled ? "★" : "☆"}
      </span>
    );
  }
  return (
    <span
      className="Star"
      style={{ color }}
      onMouseEnter={() => handleHover(value)}
      onMouseLeave={() => handleHoverLeave()}
      onClick={() => handleClick(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}
export default Star;
