import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/servicesSettingsStyle.css";
import { useState } from "react";
import Service from "./service.jsx";

const ServicesSettings = () => {
  const { isDarkMode } = useTheme();

  const initialServices = [
    { name: "BACnet Services", started: false },
    { name: "Modbus Services", started: false },
    { name: "MQTT Broker", started: false },
    { name: "Rule Engine", started: false },
    { name: "Web Services", started: false },
    { name: "DB Services", started: false },
    { name: "Cloud Connector", started: false },
  ];
  const [services, setServices] = useState(initialServices);

  const handleServiceStart = (index) => {
    const updatedServices = [...services];
    updatedServices[index].started = true;
    setServices(updatedServices);
  };

  const handleServiceStop = (index) => {
    const updatedServices = [...services];
    updatedServices[index].started = false;
    setServices(updatedServices);
  };
  return (
    <div className={`servicesSettings ${isDarkMode ? "dark" : ""}`}>
      <div className={`servicesSettingsHeader ${isDarkMode ? "dark" : ""}`}>
        Services Configurations
      </div>
      <div className="servicesSettingsContent">
        {services.map((service, index) => (
          <Service
            key={index}
            serviceName={service.name}
            started={service.started}
            handleServiceStart={() => handleServiceStart(index)}
            handleServiceStop={() => handleServiceStop(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSettings;
