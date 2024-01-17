import React, { Component } from "react";
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import { Images } from "../../Constant";
export default class DemoFour extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      isClicked: false,
    };
  }

  handleButtonClick = () => {
    // Toggle the isClicked state
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    const { isClicked } = this.state;

    return (
      <Box>
        <Button type="button" onClick={this.handleButtonClick}>
          {isClicked ? "Clicked!" : "Click me"}
        </Button>

        {/* Modal */}
        <Modal
          //   open={isClicked}
          open
          onClose={this.handleButtonClick}
          style={{ backgroundColor: "rgba(103, 103, 103, 0.53);" }}
        >
          <PaperBox>
            <InnerBox>
              <Typography variant="h5" component="div">
                Add Experienced
              </Typography>
              <CloseButton onClick={this.handleButtonClick}>
                <img
                  src={Images.aboutImg}
                  style={{ height: "20px", width: "20px" }}
                />
              </CloseButton>
            </InnerBox>
            <Box style={{ margin: "0px 20px" }}>
              <InputBox>
                <InputTxt>Company:</InputTxt>
                <InputField placeholder="Google inc."></InputField>
              </InputBox>
              <InputBox>
                <InputTxt>Job title:</InputTxt>
                <InputField placeholder="IP Lawyer"></InputField>
              </InputBox>
              <InputBox>
                <InputTxt>Loaction:</InputTxt>
                <InputField placeholder="Bangalore"></InputField>
              </InputBox>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InputBox>
                  <InputTxt>Start Date:</InputTxt>
                  <DateTextField
                    id="date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />{" "}
                </InputBox>
                <InputBox
                  style={{
                    marginTop: "10px",
                    width: "48%",
                  }}
                >
                  <InputTxt>End Date:</InputTxt>
                  <DateTextField
                    id="date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </InputBox>
              </Box>
              <InputBox>
                <InputTxt>Company:</InputTxt>
                <DescriptionBox
                  multiline
                  placeholder="Google inc."
                ></DescriptionBox>
              </InputBox>
            </Box>
            <ButtonBox>
              <SaveButton variant="contained">Save</SaveButton>
            </ButtonBox>
          </PaperBox>
        </Modal>
      </Box>
    );
  }
}

const InputField = styled(TextField)({
  width: "100%",
  border: "0.5px solid #6C6C6C",
  borderRadius: "10px",
  height: "40px",
  margin: "5px 0px",
  display: "flex",
  justifyContent: "center",
  padding: "0px 10px",
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
const InputTxt = styled(Typography)({});
const InputBox = styled(Box)({ marginTop: "10px" });
const DateTextField = styled(TextField)({
  margin: "10px 0px",
  width: "100%",
  padding: "0px 20px",
  boxSizing: "border-box",
  border: "0.5px solid #6C6C6C",
  borderRadius: "8px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
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

const DescriptionBox = styled(TextField)({
  width: "100%",
  border: "0.5px solid #6C6C6C",
  borderRadius: "5px",
  margin: "10px 0px",
  padding: "0px 10px",
  height: "140px",
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
const PaperBox = styled(Paper)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  maxWidth: "800px",
  minWidth: "600px",
  height: "500px",
  overflowX: "scroll",
  "@media (max-width: 600px)": {
    maxWidth: "400px",
    minWidth: "200px",
  },
});
const CloseButton = styled(Button)({
  "&.MuiButton-text": {
    padding: "0px",
    minWidth: "0px",
  },
  "&.MuiButton-root": {
    minWidth: "0px",
    background: "red",
  },
});
const SaveButton = styled(Button)({
  background: "#2479D1",
  color: "#fff",
  fontWeight: 600,
  fontSize: "12px",
  padding: "5px 20px",
});
const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "end",
  padding: "0px 20px 10px 20px",
});
const InnerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "0.5px solid #6C6C6C",
  padding: "10px 20px",
  alignItems: "center",
});
