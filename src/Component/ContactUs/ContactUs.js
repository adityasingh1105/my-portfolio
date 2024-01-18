import { Box, Typography, styled } from "@material-ui/core";
import React from "react";

export default function ContactUs() {
  const TestimoniesUpperContent = () => {
    return (
      <ContactUsMainBox>
        <OurProjectBox>
          <ContactUsTxt>CONTACT US</ContactUsTxt>
          <ProjectTx className="myServicesTxt">Have a Project?</ProjectTx>
          <ProjectTxDescription>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </ProjectTxDescription>
        </OurProjectBox>
      </ContactUsMainBox>
    );
  };

  const renderContactForm = () => {
    return <Box>uya</Box>;
  };

  return <Box id="Contact">{TestimoniesUpperContent}</Box>;
}
const OurProjectBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "60px 0px",
  padding: "0px 20px",
});
const ContactUsTxt = styled(Typography)({
  color: "#CACBB5",
  fontWeight: 800,
  fontSize: "15px",
  marginBottom: "15px",
});

const ProjectTx = styled(Typography)({
  color: "#000",
  fontWeight: 800,
  fontSize: "35px",
  marginBottom: "25px",
});
const ProjectTxDescription = styled(Typography)({
  color: "#999999",
  fontWeight: 600,
  fontSize: "16px",
});

const ContactUsMainBox = styled(Box)({
  backgroundColor: "#fff",
  padding: "90px 190px",
  "@media (max-width: 1000px)": {
    padding: "90px 100px",
  },
});
