import React from "react";
import { GoDotFill } from "react-icons/go";
import CustomButton from "../../../../reusableComponents/customButton";

const Service = ({
  serviceName,
  started,
  handleServiceStart,
  handleServiceStop,
}) => {
  return (
    <div className="servicesSettingsService">
      <div className="serviceName">{serviceName}</div>
      <div className="serviceDot">
        <GoDotFill
          size={30}
          style={{ margin: "auto" }}
          color={
            started ? "var(--light-green-color)" : "var(--light-red-color)"
          }
        />
      </div>
      <div className="serviceStatus">{started ? "Running" : "Stopped"}</div>
      <div className="serviceStartStopBtns">
        <CustomButton
          className="serviceBtnStart"
          buttonName="Start"
          handleClick={handleServiceStart}
        />
        <CustomButton
          className="serviceBtnStop"
          buttonName="Stop"
          handleClick={handleServiceStop}
        />
      </div>
    </div>
  );
};

export default Service;
