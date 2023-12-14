import { Box, Typography, styled } from "@material-ui/core";
import React from "react";
import { Images, projectData } from "../../Constant";

export default function Project() {
  const renderServicesUpper = () => {
    return (
      <OurProjectBox>
        <AccomplishmentTxt>ACCOMPLISHMENTS</AccomplishmentTxt>
        <OurProjectTxt className="myServicesTxt">Our Projects</OurProjectTxt>
        <OurProjectTxtDescription className="servicesDescription">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </OurProjectTxtDescription>
      </OurProjectBox>
    );
  };
  const renderContact = () => {
    return (
      <MainBox>
        <InnerBox>
          <ProjectTxt>Have a project on your mind.</ProjectTxt>
          <ProjectTxtDescription>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly.
          </ProjectTxtDescription>
          <ContactButton variant="contained" color="success">
            Contact Me
          </ContactButton>
        </InnerBox>
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

  const renderProjectCard = () => {
    return (
      <CardBox>
        {projectData.map((item, index) => (
          <InnerCardBox key={index}>
            <img
              src={item.img}
              style={{ height: "100%", width: "100%", borderRadius: "7px" }}
            />
          </InnerCardBox>
        ))}
      </CardBox>
    );
  };

  return (
    <Box id="Projects">
      {renderContact()}
      {renderServicesUpper()}
      {renderProjectCard()}
    </Box>
  );
}

const MainBox = styled(Box)({
  backgroundColor: "#b1b492",
  height: "250px",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  padding: "0px 90px",
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

const InnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});

const AccomplishmentTxt = styled(Typography)({
  color: "#b1b492",
  fontWeight: 800,
  fontSize: "15px",
  marginBottom: "15px",
});

const OurProjectBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "60px 0px",
  padding: "0px 20px",
});

const OurProjectTxtDescription = styled(Typography)({
  color: "#999999",
  fontWeight: 600,
  fontSize: "16px",
});

const OurProjectTxt = styled(Typography)({
  color: "#000",
  fontWeight: 800,
  fontSize: "35px",
  marginBottom: "25px",
});
const CardBox = styled(Box)({
  display: "flex",
  gap: "30px",
  margin: "0px 30px",
  flexWrap: "wrap",
});

const InnerCardBox = styled(Box)({
  // border: "1px solid red",
  width: "320px",
  height: "320px",
  // borderRadius: "7px",
  justifyContent: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    // borderColor: "red",
    // transform: "scale(1.1)", // Scaling the card on hover
    // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)", // Adding a box-shadow on hover
  },
});
