import React, { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export default function DarkDay() {
  const [color, setColor] = useState(true);

  const styleMode = {
    borderRadius: "1rem",
    borderColor: "#1c0d24",
    height: "30px",
    width: "8%",
    background: color ? "#9eb696" : "#d5d545",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "2%",
  };

  const changeBg = () => {
    setColor((prevSetColor) => !prevSetColor);

    document.body.style.backgroundColor = color ? "#000000" : "#ffffff";

    document.querySelectorAll("h1").forEach((h1) => {
      h1.style.color = color ? "#ffffff" : "#000000";
    });

    document.querySelectorAll("span").forEach((span) => {
      span.style.color = color ? "#ffffff" : "#000000";
    });
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <div style={styleMode}>
        <button onClick={changeBg}>
          {color ? (
            <div>
              <MdNightlight />
            </div>
          ) : (
            <div>
              <FaSun />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
