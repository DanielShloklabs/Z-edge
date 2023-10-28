import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import CustomButton from "../../../../reusableComponents/customButton";
import "../../../../../common/styles/deviceNetworkFormStyle.css";

const DeviceNetworkForm = ({ isFormOpen, setIsFormOpen, addNetwork }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [type, setType] = useState("");

  const handleSave = () => {
    const newNetwork = {
      id,
      name,
      type,
      lastPollTime: formatCurrentDateTime(),
      status: "Active",
      enable: true,
      devices: name,
    };
    addNetwork(newNetwork);
    setIsFormOpen((prev) => !prev);
    setId(id + 1);
  };

  const handleClose = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <Slide direction={"left"} in={isFormOpen} mountOnEnter unmountOnExit>
      <div className="deviceNetworkForm">
        <div className="deviceNetworkFormHeading">Add a new Network</div>
        <div className="deviceNetworkFormContents">
          <input
            type="text"
            placeholder="Name of the Network"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type of the Network"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div className="deviceNetworkFormContentsBtns">
            <CustomButton
              buttonName="Save"
              className="deviceNetworkFormContentsSaveBtn"
              handleClick={handleSave}
            />
            <CustomButton
              buttonName="Cancel"
              className="deviceNetworkFormContentsCancelBtn"
              handleClick={handleClose}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default DeviceNetworkForm;
