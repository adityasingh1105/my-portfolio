import { Box, MenuItem, Select, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";

export default class BirthDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null,
      month: null,
      day: null,
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getMonth(),
      selectDay: new Date().getDate(),
      dayValue: [],
      monthValue: [
        { id: 1, monthTitle: "January" },
        { id: 2, monthTitle: "February" },
        { id: 3, monthTitle: "March" },
        { id: 4, monthTitle: "April" },
        { id: 5, monthTitle: "May" },
        { id: 6, monthTitle: "June" },
        { id: 7, monthTitle: "July" },
        { id: 8, monthTitle: "August" },
        { id: 9, monthTitle: "September" },
        { id: 10, monthTitle: "October" },
        { id: 11, monthTitle: "November" },
        { id: 12, monthTitle: "December" },
      ],
      yearValue: [],
    };
  }
  calculatePreviousYears = () => {
    const { selectYear } = this.state;
    const years = [];
    for (let i = 0; i <= 100; i++) {
      years.push(selectYear - i);
    }
    this.setState({ yearValue: years });
  };

  getDaysInMonth = (year, month) => {
    const lastDay = new Date(year, month, 0).getDate();
    const daysArray = Array.from({ length: lastDay }, (_, index) => index + 1);
    this.setState({
      dayValue: daysArray,
    });
  };

  handleDateChange = (event) => {
    this.setState({ selectDay: event.target.value }, () =>
      console.log("@@@===date", this.state.selectDay)
    );
  };

  handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    this.setState({ selectMonth: selectedMonth }, () => {
      this.getDaysInMonth(this.state.selectYear, this.state.selectMonth);
    });
    console.log("@@@===date", this.state.selectMonth);
  };

  handleYearChange = (event) => {
    console.log("@@@===date", this.state.selectYear);

    const selectYear = event.target.value;
    this.setState({ selectYear: selectYear }, () => {
      this.getDaysInMonth(this.state.selectYear, this.state.selectMonth);
    });
  };

  componentDidMount = () => {
    this.getDaysInMonth(this.state.selectYear, this.state.selectMonth);
    this.calculatePreviousYears();
  };
  renderCustom = () => {
    return (
      <Box>
        <Select
          variant="outlined"
          displayEmpty
          labelId="Date"
          inputProps={{ "aria-label": "Without label" }}
          onChange={this.handleDateChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              style: {
                borderRadius: "10px",
              },
            },
            getContentAnchorEl: null,
            keepMounted: true,
          }}
          value={this.state.date}
        >
          {this.state.dayValue.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          variant="outlined"
          displayEmpty
          labelId="Date"
          inputProps={{ "aria-label": "Without label" }}
          onChange={this.handleMonthChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              style: {
                borderRadius: "10px",
              },
            },
            getContentAnchorEl: null,
            keepMounted: true,
          }}
          value={this.state.date}
        >
          {this.state.monthValue.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.monthTitle}
            </MenuItem>
          ))}
        </Select>
        <Select
          variant="outlined"
          displayEmpty
          labelId="Date"
          inputProps={{ "aria-label": "Without label" }}
          onChange={this.handleYearChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              style: {
                borderRadius: "10px",
              },
            },
            getContentAnchorEl: null,
            keepMounted: true,
          }}
          value={this.state.date}
        >
          {this.state.yearValue.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>
    );
  };
  render() {
    return <div>{this.renderCustom()}</div>;
  }
}
// <DayPicker
//           defaultValue={"select day"}
//           year={this.state.year} // mandatory
//           month={this.state.month} // mandatory
//           endYearGiven // mandatory if end={} is given in YearPicker
//           required={true} // default is false
//           disabled={false} // default is false
//           value={this.state.day} // mandatory
//           onChange={(day) => {
//             // mandatory
//             this.setState({ day });
//             console.log(day);
//           }}
//           id={"day"}
//           name={"day"}
//           classes={"classes"}
//           optionClasses={"option classes"}
//         />
//         <YearPicker
//           defaultValue={"select year"}
//           start={1900} // default is 1900
//           end={2024} // default is current year
//           reverse // default is ASCENDING
//           required={true} // default is false
//           disabled={false} // default is false
//           value={this.state.year} // mandatory
//           onChange={(year) => {
//             this.setState({ year });
//           }}
//           id={"year"}
//           name={"year"}
//           classes={"classes"}
//           optionClasses={"option classes"}
//         />
//         <MonthPicker
//           defaultValue={"select month"}
//           numeric // to get months as numbers
//           short // default is full name
//           caps // default is Titlecase
//           endYearGiven // mandatory if end={} is given in YearPicker
//           year={this.state.year} // mandatory
//           required={true} // default is false
//           disabled={false} // default is false
//           value={this.state.month} // mandatory
//           onChange={(month) => {
//             // mandatory
//             this.setState({ month });
//             console.log(month);
//           }}
//           id={"month"}
//           name={"month"}
//           classes={"classes"}
//           optionClasses={"option classes"}
//         />
