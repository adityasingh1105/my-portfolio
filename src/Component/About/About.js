import React from "react";
import "./About.css";
import { Images, aboutData, hobbyData } from "../../Constant";
export default function About() {
  const containerAbout = () => {
    return (
      <div className="aboutInnerMainDiv">
        <div className="innerFirstDiv">
          <img src={Images.aboutImg} className="aboutImg" />
        </div>
        <div className="innerSecondDiv">
          <p className="intoTxt">MY INTRO</p>
          <p className="aboutTxt">About Me</p>
          <p className="aboutDescription">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          {renderDetails()}
          {renderHobby()}
        </div>
      </div>
    );
  };
  const renderHobby = () => {
    return (
      <div className="hobbyMainDiv">
        {hobbyData.map((item) => (
          <div className="hobbyInnerMainDiv">
            <div className="hobbyCircleDiv">kk</div>
            <p>{item.hobby}</p>
          </div>
        ))}
      </div>
    );
  };
  const renderDetails = () => {
    return (
      <>
        {aboutData.map((item) => (
          <div className="detailsTxt">
            <p className="aboutTitleKey">{item.titleKey}</p>
            <p className="aboutTitleValue">{item.titleValue}</p>
          </div>
        ))}
      </>
    );
  };
  return <div className="containerAbout">{containerAbout()}</div>;
}
