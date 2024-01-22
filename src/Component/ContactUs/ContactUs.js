import { Box, Button, TextField, Typography, styled } from "@material-ui/core";
import React from "react";
import { Images } from "../../Constant";

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
  const renderFormBlock = () => {
    return (
      <MainBox>
        <FormMainBox>
          <InputBox>
            <InputField placeholder="Your Name" />
            <InputField placeholder="Your Email" />
          </InputBox>
          <InputField placeholder="Subject" />
          <InputMultiField multiline placeholder="Message" />
          <SaveButton>Send Message</SaveButton>
        </FormMainBox>
        {renderDetails()}
      </MainBox>
    );
  };
  const renderDetails = () => {
    return (
      <DetailMainBox>
        <DetailsBox>
          <DetailsImg src={Images.locationImg} />
          <TxtBox>
            <AddressHeading>Address.</AddressHeading>
            <AddressTxt>829, Shanti Nagar Jabalpur M.P. India</AddressTxt>
          </TxtBox>
        </DetailsBox>
        <DetailsBox>
          <DetailsImg src={Images.phoneImg} />
          <TxtBox>
            <AddressHeading>Phone.</AddressHeading>
            <AddressTxt>9144774111</AddressTxt>
          </TxtBox>
        </DetailsBox>
        <DetailsBox>
          <DetailsImg src={Images.emailImg} />
          <TxtBox>
            <AddressHeading>Email.</AddressHeading>
            <AddressTxt>aditya@aditya.com</AddressTxt>
          </TxtBox>
        </DetailsBox>
      </DetailMainBox>
    );
  };
  return (
    <Box id="Contact">
      {TestimoniesUpperContent()}
      {renderFormBlock()}
    </Box>
  );
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
const InputField = styled(TextField)({
  border: "2px solid #B1B492",
  padding: "10px",
  marginBottom: "20px",
  width: "100%",
  borderRadius: "2px",
  boxSizing: "border-box",
  "& .MuiInput-root": {
    "&:focus": {
      outline: "none",
    },
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
  },
});
const InputMultiField = styled(TextField)({
  border: "2px solid #B1B492",
  padding: "10px",
  marginBottom: "20px",
  width: "100%",
  height: "200px",
  boxSizing: "border-box",
  borderRadius: "2px",
  overflowY: "auto",
  "& .MuiInput-root": {
    "&:focus": {
      outline: "none",
    },
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
  },
});

const ContactUsMainBox = styled(Box)({
  backgroundColor: "#fff",
  padding: "90px 190px",
  "@media (max-width: 1000px)": {
    padding: "30px 20px 0px 20px",
  },
});

const SaveButton = styled(Button)({
  background: "#B1B492",
  padding: "13px 20px",
  color: "#FFF",
  fontSize: "12px",
  fontWeight: "bold",
  "&:hover": {
    background: "#4CAF50",
  },
});
const AddressHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "3px",
});
const AddressTxt = styled(Typography)({
  color: "#B1B492",
});
const DetailsBox = styled(Box)({
  display: "flex",
  marginBottom: "20px",
});
const TxtBox = styled(Box)({
  marginLeft: "30px",
});
const MainBox = styled(Box)({
  display: "flex",
  padding: "0px 90px",
  "@media (max-width: 1000px)": {
    display: "block",
    padding: "0px 40px",
  },
  "@media (max-width: 500px)": {
    padding: "0px 20px",
  },
});
const InputBox = styled(Box)({
  display: "flex",
  gap: "20px",
  "@media (max-width: 1000px)": {
    display: "block",
  },
});
const FormMainBox = styled(Box)({
  background: "#F8F9FA",
  maxWidth: "600px",
  padding: "40px",
  borderRadius: "5px",
  "@media (max-width: 500px)": {
    padding: "0px 20px",
  },
});
const DetailsImg = styled("img")({
  objectFit: "contain",
  height: "50px",
  width: "50px",
});
const DetailMainBox = styled(Box)({
  margin: "0px 20px",
  "@media (max-width: 1000px)": {
    margin: "20px 0px",
  },
});
