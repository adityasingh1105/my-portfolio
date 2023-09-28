import React from "react";
import "./Skills.css";
import { skillsData } from "../../Constant";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Paper from "@material-ui/core/Paper";

export default function Skills() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  const renderSkillUpper = () => {
    return (
      <div className="skillUpper">
        <p className="skillTxt">SKILLS</p>
        <p className="mySkillTxt">My Skills</p>
        <p className="skillDescription">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
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
