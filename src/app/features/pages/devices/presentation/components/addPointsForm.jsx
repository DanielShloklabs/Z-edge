import React from 'react'
import { useTheme } from '../../../../../common/theme/themeContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { Slide } from '@mui/material';
import DiscoveringGif from "../../../../../assets/discovering.gif";
import CustomButton from '../../../../reusableComponents/customButton';
import "../../../../../common/styles/addPointsFormStyle.css"

const AddPointsForm = ({ isFormOpen, setIsFormOpen, addNetwork }) => {
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
      for (let i = 1; i <= 10; i++) {
        dummyDevices.push(`Point-${i}`);
      }
    
      return (
        <Slide direction={"left"} in={isFormOpen} mountOnEnter unmountOnExit>
          <div className={`addPointsForm ${isDarkMode ? "dark": ""}`}>
            <div className="addPointsFormHeading">Add Points</div>
            <div className="addPointsFormContents">
              {isDiscovering ? (
                <div className="addPointsFormDiscoveringImg">
                  <img src={DiscoveringGif} alt="" />
                  Fetching Points from Device
                </div>
              ) : (
                <>
                  <div className="addPointsFormContentsDeviceList">
                    <div className="addPointsFormContentsDeviceListItem selectAll">
                      <input
                        type="checkbox"
                        id="select-all"
                        onChange={handleToggleSelectAll}
                        checked={selectAll}
                      />
                      <label htmlFor="select-all">Select All Points</label>
                    </div>
                    <div className="addPointsFormContentsDeviceListContents">
                      {dummyDevices.map((device, index) => (
                        <div
                          key={device}
                          className="addPointsFormContentsDeviceListItem"
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
                  <div className="addPointsFormContentsBtns">
                    <CustomButton
                      buttonName="Save"
                      className="addPointsFormContentsSaveBtn"
                      handleClick={handleSave}
                    />
                    <CustomButton
                      buttonName="Cancel"
                      className="addPointsFormContentsCancelBtn"
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

export default AddPointsForm