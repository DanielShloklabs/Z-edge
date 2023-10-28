import { Slide } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomButton from "../../../../reusableComponents/customButton";
import DiscoveringGif from "../../../../../assets/discovering.gif";
import "../../../../../common/styles/addDeviceFormStyle.css";
import { useEffect } from "react";
import { useTheme } from "../../../../../common/theme/themeContext";

const AddDeviceForm = ({ isFormOpen, setIsFormOpen, addNetwork }) => {
  const { isDarkMode } = useTheme();
  const [isDiscovering, setIsDiscovering] = useState(true);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDiscovering(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleToggleDevice = (device) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices((prev) => prev.filter((item) => item !== device));
    } else {
      setSelectedDevices((prev) => [...prev, device]);
    }
  };

  const handleToggleSelectAll = () => {
    if (selectAll) {
      setSelectedDevices([]);
    } else {
      setSelectedDevices(dummyDevices);
    }
    setSelectAll((prev) => !prev);
  };

  const handleSave = () => {
    console.log(selectedDevices);
    setIsFormOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsFormOpen((prev) => !prev);
  };
  const dummyDevices = [];
  for (let i = 1; i <= 100; i++) {
    dummyDevices.push(`Device-${i}`);
  }

  return (
    <Slide direction={"left"} in={isFormOpen} mountOnEnter unmountOnExit>
      <div className={`addDeviceForm ${isDarkMode ? "dark": ""}`}>
        <div className="addDeviceFormHeading">Add Devices</div>
        <div className="addDeviceFormContents">
          {isDiscovering ? (
            <div className="addDeviceFormDiscoveringImg">
              <img src={DiscoveringGif} alt="" />
              Discovering Devices
            </div>
          ) : (
            <>
              <div className="addDeviceFormContentsDeviceList">
                <div className="addDeviceFormContentsDeviceListItem selectAll">
                  <input
                    type="checkbox"
                    id="select-all"
                    onChange={handleToggleSelectAll}
                    checked={selectAll}
                  />
                  <label htmlFor="select-all">Select All Devices</label>
                </div>
                <div className="addDeviceFormContentsDeviceListContents">
                  {dummyDevices.map((device, index) => (
                    <div
                      key={device}
                      className="addDeviceFormContentsDeviceListItem"
                    >
                      <input
                        type="checkbox"
                        id={device}
                        onChange={() => handleToggleDevice(device)}
                        checked={selectedDevices.includes(device)}
                      />
                      <label htmlFor={device}>{device}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="addDeviceFormContentsBtns">
                <CustomButton
                  buttonName="Save"
                  className="addDeviceFormContentsSaveBtn"
                  handleClick={handleSave}
                />
                <CustomButton
                  buttonName="Cancel"
                  className="addDeviceFormContentsCancelBtn"
                  handleClick={handleClose}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Slide>
  );
};

export default AddDeviceForm;
