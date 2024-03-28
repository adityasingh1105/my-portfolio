import React, { useState, useEffect } from "react";
import "./Herosection.css";
import { Images, statsData } from "../../Constant";
import Button from "@material-ui/core/Button";
import { withStyles, createStyles } from "@material-ui/core/styles";
import cvPdf from "../../Assets/aditya.pdf";

function Herosection(props) {
  const [bgImg, setbgImg] = useState(false);
  const { classes } = props;

  //----------pdf download function start---
  const handleDownload = () => {
    const pdfUrl = cvPdf;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "Aditya.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  //----------pdf download function end---

  useEffect(() => {
    const intervalId = setInterval(() => {
      setbgImg((prevBgImg) => !prevBgImg);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [bgImg]);

  const herosectionBox = () => {
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
          {herosectioCenterContent()}
        </div>
      </div>
    );
  };

  const herosectioCenterContent = () => {
    return (
      <div className="centerMainBox">
        <div className="headingLabel">I DESIGN & BUILD BRANDS</div>
        <div className="introLabel">
          Hi, I am <span className="nameSpan">Aditya</span>
          <br /> my favourite work.
        </div>
        <Button variant="contained" color="success" className={classes.hireBtn}>
          Hire Me
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.downloadBtn}
          onClick={handleDownload}
        >
          Download Cv
        </Button>
      </div>
    );
  };
  const renderStats = () => {
    return (
      <div className="statsMainDiv">
        {statsData.map((item) => (
          <div className="statsInnerDiv" key={item.id}>
            <div className="statsCircleDiv">
              <img src={item.img} alt={item.title} className="statsImg" />
            </div>
            <div>
              <div className="numberStats">
                {item.numbers}
                <span className="spanIcon">+</span>
              </div>
              <div className="statsTitle">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {herosectionBox()}
      {renderStats()}
    </div>
  );
}

const style = createStyles({
  hireBtn: {
    backgroundColor: "#B1B492",
    color: "#fff",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: "bold",
    marginRight: "10px",
    boxShadow: "none",
  },
  downloadBtn: {
    color: "#B1B492",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#B1B492",
      color: "#fff",
      // border: "0px",
      border: "1px solid  #B1B491",
    },
  },
});
export default withStyles(style)(Herosection);
