import React from "react";
import "./Services.css";
import { servicesData } from "../../Constant";
import { Paper } from "@material-ui/core";

export default function Services() {
  const renderServicesUpper = () => {
    return (
      <div className="servicesUpper">
        <p className="servicesTxt">I AM GRAT AT</p>
        <p className="myServicesTxt">We do awesome services for our clients</p>
        <p className="servicesDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
      </div>
    );
  };
  const renderServicesCard = () => {
    return (
      <div className="serviceCardMainDiv">
        {servicesData.map((item) => (
          <Paper elevation={7} className="serviceCardInnerMain">
            <div className="serviceImgDiv">
              <img
                src={item.serviceImg}
                alt={item.serviceTitle}
                className="serviceImg"
              />
            </div>
            <p className="serviceTitle">{item.serviceTitle}</p>
            <p className="serviceDescriptionsTxt">{item.serviceDescriptions}</p>
          </Paper>
        ))}
      </div>
    );
  };
  return (
    <div className="containerServices" id="Services">
      {renderServicesUpper()}
      {renderServicesCard()}
    </div>
  );
}
