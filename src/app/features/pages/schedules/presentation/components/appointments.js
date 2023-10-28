export let appointments = [
  {
    title: "Set Temp: 25",
    startDate: new Date(2023, 9, 25, 9, 35),
    endDate: new Date(2023, 9, 25, 11, 30),
    id: 0,
  },
  
];

export const addAppointment = (newAppointment) => {
  appointments = [...appointments, newAppointment];
};
