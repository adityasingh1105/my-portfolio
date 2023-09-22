import React, { useState, useEffect } from "react";
import "./Herosection.css";
import { Images } from "../../Constant";

export default function Herosection() {
  const [bgImg, setbgImg] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setbgImg((prevBgImg) => !prevBgImg);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [bgImg]);

  return (
    <div className="containerHerosection" id="Home">
      <div className="parentDiv">
        <div className="divStyle">
          <div className="box-1"></div>
          <div className="box-2"></div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${
              bgImg ? Images.backgroundImg1 : Images.backgroundImg2
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
