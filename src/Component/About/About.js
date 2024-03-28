import React from "react";
import "./About.css";
import { Images, aboutData, hobbyData } from "../../Constant";

export default function About() {
  const handleCallButtonClick = (item) => {
    if (item.id === 5) {
      window.location.href = `tel:${9144774111}`;
    }
  };

  const containerAbout = () => {
    return (
      <div className="aboutInnerMainDiv">
        <div className="innerFirstDiv">
          <img src={Images.aboutImg} className="aboutImg" alt="AboutImg" />
        </div>
        <div className="innerSecondDiv">
          <div>
            <p className="introTxt">MY INTRO</p>
            <p className="aboutTxt">About Me</p>
            <p className="aboutDescription">
              Software engineer with a passion for problem-solving and
              innovation. Proficient in multiple programming languages and
              technologies, with expertise in React and React Native. Dedicated to writing clean, efficient code and
              delivering high-quality software solutions.
            </p>
          </div>
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
          <div className="hobbyInnerMainDiv" key={item.title}>
            <div className="hobbyCircleDiv">
              <img src={item.hobbyImg} alt={item.title} className="hobbyImg" />
            </div>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>{item.hobby}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div>
        {aboutData.map((item) => (
          <div className="detailsTxt" key={item.titleKey}>
            <p className="aboutTitleKey">{item.titleKey}</p>
            <p
              className="aboutTitleValue"
              onClick={() => handleCallButtonClick(item)}
            >
              {item.titleValue}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="containerAbout" id="About">
      {containerAbout()}
    </div>
  );
}
