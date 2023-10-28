import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import "../../../../common/styles/schedulesStyle.css";
import { useTheme } from "../../../../common/theme/themeContext";
import { addAppointment, appointments } from "./components/appointments";
import ScheduleForm from "./components/scheduleForm";

const Schedules = () => {
  const { isDarkMode } = useTheme();
  const data = appointments;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentAppointments, setCurrentAppointments] = useState(data);

  const handleAddAppointment = (newAppointment) => {
    addAppointment(newAppointment);

    setCurrentAppointments([...currentAppointments, newAppointment]);
  };
  const handleOpen = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <div className={`schedules ${isDarkMode ? "dark" : ""}`}>
      <div className="schedulesContainer">
        <div className="schedulesCreateBtn" onClick={() => handleOpen()}>
          <RiCalendarEventFill size={20} className="scheduleCreateBtnIcon" />
          <p>Add Event</p>
        </div>
        <div className="schedulesContent">
          <Paper className="schedulesCalender">
            <Scheduler data={appointments} height={660}>
              <WeekView startDayHour={9} endDayHour={19} />
              <Appointments />
            </Scheduler>
          </Paper>
        </div>
      </div>
      {isFormOpen && (
        <ScheduleForm
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          addAppointment={handleAddAppointment}
        />
      )}
    </div>
  );
};
export default Schedules;
