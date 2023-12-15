import { Box, Typography, styled } from "@material-ui/core";
import React from "react";
import { Images, projectData } from "../../Constant";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
              alt="ProejectImg"
              style={{ height: "100%", width: "100%", borderRadius: "7px" }}
            />
            <InnerCardBoxHover className="InnerCardBoxHover">
              <BrandingTxt>{item.description}</BrandingTxt>
              <TitleTxt style={{}}>{item.title}</TitleTxt>
            </InnerCardBoxHover>
          </InnerCardBox>
        ))}
      </CardBox>
    );
  };
  const MyCarousel = () => {
    return (
      <Carousel autoPlay={true} showThumbs={true}>
        <div
          style={{
            backgroundColor: "red",
            height: "100px",
            width: "100px",
          }}
        ></div>
      </Carousel>
    );
  };

  const Testimonies = () => {
    return (
      <Box
        style={{
          backgroundColor: "#B1B492",
        }}
      >
        {TestimoniesUpperContent()}
        <Carousel
          autoPlay={true}
          axis="horizontal"
          centerMode={true}
          interval={1000}
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          {projectData.map((item, index) => (
            <InnerCardBox key={index}>
              <img
                src={item.img}
                alt="ProejectImg"
                style={{ height: "100%", width: "100%", borderRadius: "7px" }}
              />
            </InnerCardBox>
          ))}
        </Carousel>
      </Box>
    );
  };

  const TestimoniesUpperContent = () => {
    return (
      <OurProjectBox>
        <TestimoniesTxt>TESTIMONIES</TestimoniesTxt>
        <ClientTxt className="myServicesTxt">What client says about?</ClientTxt>
        <ClientTxtDescription>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </ClientTxtDescription>
      </OurProjectBox>
    );
  };
  return (
    <Box id="Projects">
      {renderContact()}
      {renderServicesUpper()}
      {renderProjectCard()}
      {Testimonies()}
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
const TestimoniesTxt = styled(Typography)({
  color: "#fff",
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
const ClientTxtDescription = styled(Typography)({
  color: "#ffff",
  fontWeight: 600,
  fontSize: "16px",
});

const ClientTxt = styled(Typography)({
  color: "#fff",
  fontWeight: 800,
  fontSize: "35px",
  marginBottom: "25px",
});
const OurProjectTxt = styled(Typography)({
  color: "#000",
  fontWeight: 800,
  fontSize: "35px",
  marginBottom: "25px",
});

const TitleTxt = styled(Typography)({
  color: "#B7BA9C",
  fontWeight: 600,
  fontSize: "20px",
  wordWrap: "break-word",
  textAlign: "center",
  marginTop: "10px",
});

const CardBox = styled(Box)({
  display: "flex",
  gap: "30px",
  margin: "0px 30px",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "60px",
});

const BrandingTxt = styled(Typography)({
  color: "#FFF",
  fontWeight: 600,
  fontSize: "25px",
  wordWrap: "break-word",
  textAlign: "center",
});

const InnerCardBoxHover = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  display: "none",
  padding: "25px",
  boxSizing: "border-box",
  borderRadius: "7px",
});

const InnerCardBox = styled(Box)({
  width: "320px",
  height: "320px",
  position: "relative",
  justifyContent: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover .InnerCardBoxHover": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});
