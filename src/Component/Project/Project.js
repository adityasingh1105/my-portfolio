import { Box, Button, Typography, styled } from "@material-ui/core";
import React from "react";
import { Images } from "../../Constant";

export default function Project() {
  const renderContact = () => {
    return (
      <MainBox>
        <Box>
          <ProjectTxt>Have a project on your mind.</ProjectTxt>
          <ProjectTxtDescription>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly.
          </ProjectTxtDescription>
          <ContactButton variant="contained" color="success">
            Contact Me
          </ContactButton>
        </Box>
        <img
          src={Images.projectImgUser}
          alt="projectImgUser"
          style={{
            height: "270px",
            width: "270px",
            // position: "absolute",
            // top: "30px",
            // bottom:"30px"
          }}
        />
      </MainBox>
    );
  };
  return <Box id="Projects">{renderContact}</Box>;
}

const MainBox = styled(Box)({
  backgroundColor: "#b1b492",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
});

const ContactButton = styled(Box)({
  backgroundColor: "#fff",
  color: "#b1b492",
  borderRadius: "7px",
  fontSize: "14px",
  fontWeight: "bold",
  boxShadow: "none",
  width: "130px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ProjectTxt = styled(Typography)({
  color: "#fff",
  fontWeight: 600,
  fontSize: "30px",
});

const ProjectTxtDescription = styled(Typography)({
  color: "#fff",
  fontWeight: 500,
  fontSize: "17px",
});
