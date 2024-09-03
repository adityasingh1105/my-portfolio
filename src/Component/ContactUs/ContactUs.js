import { Box, Button, Snackbar, TextField, Typography, styled } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Images } from "../../Constant";
import * as Yup from 'yup';
import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef();
  const [alert, setalert] = useState(false)

  const handleEmailClick = () => {
    emailjs
      .sendForm(
        "service_p24iox8",
        "template_6zeivme",
        formRef.current,
        "LsXYqumo3OGci1w7J"
      )
      .then(
        (result) => {
          setalert(!alert)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = () => {
    setalert(!alert)
  };

  const TestimoniesUpperContent = () => {
    return (
      <ContactUsMainBox>
        <OurProjectBox>
          <ContactUsTxt>CONTACT US</ContactUsTxt>
          <ProjectTx className="myServicesTxt">Have a Project?</ProjectTx>
          <ProjectTxDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </ProjectTxDescription>
        </OurProjectBox>
      </ContactUsMainBox>
    );
  };

  const validationSchema = Yup.object({
    from_name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const renderFormBlock = () => {
    return (
      <MainBox>
        <FormMainBox>
          <Formik
            initialValues={{ from_name: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            validateOnChange={true}  // Enable validation on field change
            validateOnBlur={true}    // Enable validation on field blur
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              handleEmailClick();
              resetForm();
            }}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form ref={formRef}>
                <InputBox>
                  <Box className="bottomBox">
                    <InputField
                      name="from_name"
                      placeholder="Your Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <Box>{errors.name}</Box>}
                  </Box>
                  <Box className="bottomBox">
                    <InputField
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <Box className="errorBox" >{errors.email}</Box>}
                  </Box>
                </InputBox>

                <Box className="bottomBox">
                  <InputField
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.subject && errors.subject && <Box>{errors.subject}</Box>}
                </Box>
                <Box className="bottomBox">
                  <InputMultiField
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && <Box>{errors.message}</Box>}
                </Box>
                <SaveButton type="submit">Send Message</SaveButton>
              </Form>
            )}
          </Formik>
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
            <AddressTxt
              onClick={() => {
                window.location.href = `tel:${9144774111}`;
              }}
            >
              +91-9144774111
            </AddressTxt>
          </TxtBox>
        </DetailsBox>
        <DetailsBox>
          <DetailsImg src={Images.emailImg} />
          <TxtBox>
            <AddressHeading
              onClick={() => {
                handleEmailClick();
              }}
            >
              Email.
            </AddressHeading>
            <AddressTxt>adisadis1234@gmail.com</AddressTxt>
          </TxtBox>
        </DetailsBox>
      </DetailMainBox>
    );
  };

  return (
    <Box id="Contact">
      {TestimoniesUpperContent()}
      {renderFormBlock()}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={alert}
        onClose={handleClose}
        autoHideDuration={3000}
        message="Your message has been sent successfully!"
      />
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
  width: "100%",
  borderRadius: "2px",
  boxSizing: "border-box",
  marginBottom: "10px",
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
  "& .errorBox": {
    marginBottom: "10px",
    backgroundColor: "red"
  }
});
const InputMultiField = styled(TextField)({
  border: "2px solid #B1B492",
  padding: "10px",
  marginBottom: "20px",
  width: "100%",
  height: "100px",
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
  padding: "20px 190px",
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
  color: "#999999",
  cursor: "pointer",
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
  padding: "40px",
  borderRadius: "5px",
  "@media (max-width: 500px)": {
    padding: "20px",
  },
  "& .bottomBox": {
    margin: "0px 0px 10px 0px"
  }
});
const DetailsImg = styled("img")({
  objectFit: "contain",
  height: "50px",
  width: "50px",
});
const DetailMainBox = styled(Box)({
  margin: "0px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  "@media (max-width: 1000px)": {
    margin: "20px 0px",
  },
});
