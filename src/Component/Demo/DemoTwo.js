import React, { Component } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Images } from "../../Constant";

class DemoTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      open: false,
    };
  }

  handleChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  renderSelect = () => {
    return (
      <AboveSelect>
        <UpperText>My Jobs</UpperText>
        <ArrowIcon>{">"}</ArrowIcon>
        <ActiveText>Active Contract</ActiveText>
      </AboveSelect>
    );
  };

  renderContract = () => {
    return (
      <ContractMainBox>
        <HeaderTxt>Active Contract</HeaderTxt>
        <Box style={{ display: "flex" }}>
          <SearchMainBox>
            <img
              src={Images.quoteLeftImg}
              style={{ height: "20px", width: "20px", padding: "0px 8px" }}
            />
            <SearchTextField placeholder="Search by contract or company name" />
          </SearchMainBox>
          <ExportButton
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            Export CSV
          </ExportButton>
        </Box>
      </ContractMainBox>
    );
  };

  renderDate = () => {
    return (
      <DateBox>
        <DateInnerBox>
          <Box>
            <SelectTxt>Select Date</SelectTxt>
            <FormControl>
              <SelectButton
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.age}
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </SelectButton>
            </FormControl>
          </Box>
          <Box style={{ marginLeft: "30px" }}>
            <SelectTxt>Select Order</SelectTxt>
            <FormControl>
              <SelectButton
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.age}
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Ascending</MenuItem>
                <MenuItem value={20}>Descending</MenuItem>
              </SelectButton>
            </FormControl>
          </Box>
        </DateInnerBox>
        <FilterButton
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Filter
        </FilterButton>
      </DateBox>
    );
  };

  renderManagement = () => {
    return (
      <ManagementBox>
        <Box>
          <HotelTxt>Hotel Management Website</HotelTxt>
        </Box>
        <Box>
          <HourBox>
            <TotalTxt>Total Hours Tracked:</TotalTxt>
            <TotalTxtDescription>72 Hours</TotalTxtDescription>
          </HourBox>
          <HourBox>
            <TotalTxt>Total Hours Tracked:</TotalTxt>
            <TotalTxtDescription>72 Hours</TotalTxtDescription>
          </HourBox>
          <HourBox>
            <TotalTxt>Total Earned:</TotalTxt>
            <TotalTxtDescription>72 Hours</TotalTxtDescription>
          </HourBox>
        </Box>
        <Box>
          <TotalTxt>January 2021- Present</TotalTxt>
          <PriceTxt>$10/hr</PriceTxt>
        </Box>
      </ManagementBox>
    );
  };
  render() {
    return (
      <MainBox>
        {this.renderSelect()}
        {this.renderContract()}
        {this.renderDate()}
        {this.renderManagement()}
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
const SelectTxt = styled(Typography)({
  color: "#8F8F8f",
  marginBottom: "10px",
});

const ExportButton = styled(Button)({
  background: "#2478D1",
  marginLeft: "10px",
  borderRadius: "8px",
  color: "#fff",
  "&:hover": {
    background: "#185A8D",
  },
});
const FilterButton = styled(Button)({
  background: "#2478D1",
  marginLeft: "10px",
  borderRadius: "8px",
  height: "40px",
  color: "#fff",
  padding: "0px 40px",
  "&:hover": {
    background: "#185A8D",
  },
});
const SelectButton = styled(Select)({
  background: "#fff",
  width: "200px",
  borderRadius: "7px",
  height: "45px",
});
const DateBox = styled(Box)({
  display: "flex",
  background: "#F8F9FB",
  padding: "20px",
  borderRadius: "8px",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
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
const DateInnerBox = styled(Box)({
  display: "flex",
});

const ManagementBox = styled(Box)({
  display: "flex",
  background: "#F8F9FB",
  padding: "20px",
  borderRadius: "8px",
  justifyContent: "space-between",
  marginTop: "20px",
});
const HourBox = styled(Box)({
  display: "flex",
  marginBottom: "5px",
  justifyContent: "space-between",
});
const PriceTxt = styled(Typography)({
  fontSize: "15px",
  fontWeight: "normal",
  color: "#216FC4",
});
const AboveSelect = styled(Typography)({
  display: "flex",
});
const ContractMainBox = styled(Typography)({
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-between",
});

const HotelTxt = styled(Typography)({
  fontWeight: "bold",
  fontSize: "20px",
});
const SearchMainBox = styled(Typography)({
  height: "50px",
  border: "1px solid #878787",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  width: "350px",
});
const TotalTxt = styled(Typography)({
  color: "#777778",
  marginRight: "5px",
});
const TotalTxtDescription = styled(Typography)({
  color: "#000",
});
const SearchTextField = styled(TextField)({
  width: "100%",
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

export default DemoTwo;
