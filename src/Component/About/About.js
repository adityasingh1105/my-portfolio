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
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
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
            <p>{item.hobby}</p>
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
