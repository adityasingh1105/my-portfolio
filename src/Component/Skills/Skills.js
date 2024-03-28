import React from "react";
import "./Skills.css";
import { skillsData } from "../../Constant";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Paper from "@material-ui/core/Paper";

export default function Skills() {
  const renderSkillUpper = () => {
    return (
      <div className="skillUpper">
        <p className="skillTxt">SKILLS</p>
        <p className="mySkillTxt">My Skills</p>
        <p className="skillDescription">
          Proficient in building dynamic user interfaces with React.js, adept at
          optimizing code for performance and scalability.
        </p>
      </div>
    );
  };

  const renderSkillCard = () => {
    return (
      <div className="skillCardMain">
        {skillsData.map((item) => (
          <Paper elevation={7} className="skillCardInnerMain">
            <p className="hobbyInnerTxt">{item.skillTitle}</p>
            <div style={{ width: 170, height: 170 }}>
              <CircularProgressbar
                value={item.skillRate}
                text={`${item.skillRate}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#B1B492",
                  textColor: "#000",
                  textSize: "20px",
                })}
              />
            </div>
          </Paper>
        ))}
      </div>
    );
  };
  return (
    <div className="containerSkills" id="Skills">
      {renderSkillUpper()}
      {renderSkillCard()}
    </div>
  );
}
