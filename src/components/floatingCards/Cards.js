import React from "react";
import "./cards.css";
import { FastCounter } from "react-smooth-counter";
import Odometer from "react-odometerjs";

const Cards = () => {
  return (
    <div className="box">
      <div className="b1">
        {" "}
        <div className="h">Current Projects</div>
        <div className="fast">
        <FastCounter
          delay={2000}
          startNumber={10000}
          to={0}
          style={{
            color: "white",
            fontWeight: "bold",
          }}
          className={"randomClass"}
        />
        +
        </div>
      </div>
      <div className="b2">
        <div className="h">Completed Projects</div>
        <div className="fast">
        <FastCounter
          delay={2000}
          startNumber={10000}
          to={0}
          style={{
            color: "white",
            fontWeight: "bold",
          }}
          className={"randomClass"}
        />
        +
        </div>
        </div>
      <div className="b3">
        <div className="h">Future Projects</div>
        <div className="fast">
        <FastCounter
          delay={2000}
          startNumber={10000}
          to={0}
          style={{
            color: "white",
            fontWeight: "bold",
            transition: "1s",
          }}
          className={"randomClass"}
        />
        +
        </div>
      </div>
      <div className="b2">
        <div className="h">Years Of Experience</div>
        <div className="fast">
        <FastCounter
          delay={2000}
          startNumber={10000}
          to={0}
          style={{
            color: "white",
            fontWeight: "bold",
            transition: "1s",
          }}
          className={"randomClass"}
        />
        +
        </div>
      </div>
    </div>
  );
};

export default Cards;
