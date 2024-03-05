import React from "react";
import result1 from "../assets/images/solution1.jpg";
import result2 from "../assets/images/solution2.jpg";
import result3 from "../assets/images/solution3.jpg";
import result4 from "../assets/images/solution4.jpg";

import "../index.css";

export default function Carousel() {
  return (
    <>
      <section className="flex-container">
        <div className="caja">
          <img src={result1} alt="XDD" />
        </div>

        <div className="caja">
          <img src={result2} alt="XDD" />
        </div>

        <div className="caja">
          <img src={result3} alt="XDD" />
        </div>

        <div className="caja">
          <img src={result4} alt="XDD" />
        </div>
      </section>
    </>
  );
}
