import { Box, Typography, styled, Select, MenuItem } from "@material-ui/core";

import React, { Component } from "react";

import { demoData, demoDataTwo } from "../../Constant";

export default class DemoThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthData: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      year: null,
      month: null,
      day: null,
    };
  }
  renderSelect = () => {
    return (
      <Box>
        <Box style={{ display: "flex" }}>
          <UpperText>My Jobs</UpperText>
          <ArrowIcon>{">"}</ArrowIcon>
          <UpperText>All Contract</UpperText>
          <ArrowIcon>{">"}</ArrowIcon>
        </Box>
        <HeaderTxt>Active Contract</HeaderTxt>
      </Box>
    );
  };

  renderContent = () => {
    return (
      <Box>
        <ProjectOuterMainBox>
          {demoDataTwo.map((item) => (
            <ProjectInnerMainBox style={{ background: "red" }}>
              <Box
                style={{
                  background: "#F8F9FB",
                }}
              >
                <Typography>{item.status}</Typography>
                <Typography>{item.priceTxt}</Typography>
              </Box>
            </ProjectInnerMainBox>
          ))}
        </ProjectOuterMainBox>
      </Box>
    );
  };
  render() {
    return (
      <MainBox>
        {this.renderSelect()}
        {this.renderContent()}
      </MainBox>
    );
  }
}

const ProjectInnerMainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  minWidth: "300px",
  position: "relative",
  borderRadius: "10px",
  padding: "20px",
  justifyContent: "space-between",
});
const ProjectOuterMainBox = styled(Box)({
  display: "flex",
  rowGap: "70px",
  columnGap: "20px",
  flexWrap: "wrap",
});
const MainBox = styled(Box)({
  margin: "60px",
});

const ArrowIcon = styled(Typography)({
  fontWeight: "bold",
  margin: "0px 8px",
});
const ActiveText = styled(Typography)({
  fontWeight: "bold",
  color: "blue",
  cursor: "pointer",
});

const UpperText = styled(Typography)({
  fontWeight: "bold",
  cursor: "pointer",
});
const HeaderTxt = styled(Typography)({
  fontWeight: "bold",
  fontSize: "30px",
  marginTop: "30px",
});
