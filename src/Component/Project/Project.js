import { Box, Typography, styled } from "@material-ui/core";
import React from "react";
import { Images, projectData, testimoniesData } from "../../Constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const Testimonies = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1000, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <TestimoniesMainBox>
        {TestimoniesUpperContent()}
        <Box>
          <SliderBox {...settings}>
            {testimoniesData.map((item, index) => (
              <InnerCardBoxSlider>
                <Box style={{ display: "flex", gap: "20px" }}>
                  <img
                    src={Images.quoteLeftImg}
                    alt="ProejectImg"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <Typography style={{ fontSize: "18px", color: "#9D9D9D" }}>
                    {item.description}
                  </Typography>
                </Box>
                <Box
                  style={{ marginTop: "20px", display: "flex", gap: "20px" }}
                >
                  <img
                    src={item.clientImg}
                    style={{
                      height: "80px",
                      widtyh: "80px",
                      borderRadius: "100%",
                    }}
                  />
                  <ClientBox>
                    <ClientNameTxt>{item.clientName}</ClientNameTxt>
                    <ClientPositionTxt>{item.clientPosition}</ClientPositionTxt>
                  </ClientBox>
                </Box>
              </InnerCardBoxSlider>
            ))}
          </SliderBox>
        </Box>
      </TestimoniesMainBox>
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
  background: "#fff",
  transition: "transform 0.3s ease-in-out",
  "&:hover .InnerCardBoxHover": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const InnerCardBoxSlider = styled(Box)({
  background: "#fff",
  borderRadius: "5px",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  gap: "20px",
  width: "95% !important",
});

const SliderBox = styled(Slider)({
  "& .slick-dots li button:before": {
    border: " 2px solid #fff",
    borderRadius: "100%",
    lineHeight: "16px",
    height: "15px",
    width: "15px",
  },
});

const ClientNameTxt = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  color: "#000",
});
const ClientPositionTxt = styled(Typography)({
  fontSize: "15px",
  color: "#B3B3B3",
});
const ClientBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});
const TestimoniesMainBox = styled(Box)({
  backgroundColor: "#B1B492",
  padding: "90px 190px",
  "@media (max-width: 1000px)": {
    padding: "90px 100px",
  },
});
