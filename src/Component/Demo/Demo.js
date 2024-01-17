import { Box, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";
import { Images, demoData } from "../../Constant";

export default class Demo extends Component {
  renderSelect = () => {
    return (
      <Box style={{ display: "flex" }}>
        <UpperText>My Jobs</UpperText>
        <ArrowIcon>{">"}</ArrowIcon>
        <UpperText>All Contract</UpperText>
        <ArrowIcon>{">"}</ArrowIcon>
        <ActiveText>Active Contract</ActiveText>
      </Box>
    );
  };
  renderContract = () => {
    return (
      <Box style={{ marginTop: "30px" }}>
        <HeaderTxt>Active Contract</HeaderTxt>
        <TitleTxt>
          Remember that this behavior may depend on your installed extensions
          and settings. If, for some reason, the lorem snippet doesn't work, you
          can check your user or workspace settings for any conflicting
          keybindings or extensions.
        </TitleTxt>
        <TitleTxt>
          Remember that this behavior may depend on your installed extensions.
          <LinkTxt>Start Searching for new project now.</LinkTxt>
        </TitleTxt>
      </Box>
    );
  };
  renderProject = () => {
    return (
      <ProjectOuterMainBox>
        {demoData.map((item) => (
          <ProjectInnerMainBox>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <PriceBox>
                <PriceTxt>${item.price}</PriceTxt>
                <PriceTxt>per/Hour</PriceTxt>
              </PriceBox>
              <DateBox>
                <img
                  src={Images.quoteLeftImg}
                  style={{ height: "20px", width: "20px" }}
                />
                <DateTxt>{item.date}</DateTxt>
              </DateBox>
            </Box>
            <Box>
              <ProjectNameTxt>{item.projectTitle}</ProjectNameTxt>
              <ProjectOwnerNameTxt>{item.projectOwner}</ProjectOwnerNameTxt>
            </Box>
            <ButtonBox>
              <ProjectTxt>GO TO PROJECT</ProjectTxt>
              <img
                src={Images.quoteLeftImg}
                style={{ height: "20px", width: "20px" }}
              />
            </ButtonBox>
          </ProjectInnerMainBox>
        ))}
      </ProjectOuterMainBox>
    );
  };

  render() {
    return (
      <MainBox>
        {this.renderSelect()}
        {this.renderContract()}
        {this.renderProject()}
      </MainBox>
    );
  }
}
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
});
const TitleTxt = styled(Typography)({
  margin: "20px 0px",
  display: "flex",
});
const LinkTxt = styled(Typography)({
  fontWeight: "bold",
  borderBottom: "1px solid black",
  cursor: "pointer",
});

const ProjectInnerMainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  minWidth: "300px",
  maxHeight: "200px",
  minHeight: "200px",
  position: "relative",
  background: "#F5F8FC",
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
const PriceTxt = styled(Typography)({
  fontSize: "12px",
  fontWeight: "normal",
  color: "#216FC4",
});
const PriceBox = styled(Box)({
  width: "70px",
  background: "#E2ECF6",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "5px",
});
const DateBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
const DateTxt = styled(Typography)({
  color: "#6F6F6F",
});
const ButtonBox = styled(Box)({
  background: "#216FC4",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "7px",
  cursor: "pointer",
});
const ProjectTxt = styled(Typography)({
  color: "#fff",
  marginRight: "10px",
});
const ProjectNameTxt = styled(Typography)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "8px",
  width: "70%",
});
const ProjectOwnerNameTxt = styled(Typography)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontSize: "12px",
});
