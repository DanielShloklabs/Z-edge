import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import CustomButton from "../../../../reusableComponents/customButton";

const ScheduleForm = ({ isFormOpen, setIsFormOpen, addAppointment }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSave = () => {
    const newAppointment = {
      title,
      startDate: new Date(
        parseInt(startDate.split("-")[0]),
        parseInt(startDate.split("-")[1]) - 1,
        parseInt(startDate.split("-")[2]),
        parseInt(startTime.split(":")[0]),
        parseInt(startTime.split(":")[1])
      ),
      endDate: new Date(
        parseInt(endDate.split("-")[0]),
        parseInt(endDate.split("-")[1]) - 1,
        parseInt(endDate.split("-")[2]),
        parseInt(endTime.split(":")[0]),
        parseInt(endTime.split(":")[1])
      ),
    };
    addAppointment(newAppointment);
    setIsFormOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <Slide direction={"left"} in={isFormOpen} mountOnEnter unmountOnExit>
      <div className="scheduleForm">
        <div className="scheduleFormHeading">Add a new event</div>
        <div className="scheduleFormContents">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="time"
            placeholder="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="time"
            placeholder="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <div className="scheduleFormContentsBtns">
            <CustomButton
              buttonName="Save"
              className="scheduleFormContentsSaveBtn"
              handleClick={handleSave}
            />
            <CustomButton
              buttonName="Cancel"
              className="scheduleFormContentsCancelBtn"
              handleClick={handleClose}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ScheduleForm;
