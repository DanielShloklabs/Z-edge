import React from "react";
import "../../../../../common/styles/configurationSettingsNetworkStyle.css";
import COMConfigurationOption from "./comConfigurationOption.jsx";
import NetworkConfigurationOption from "./networkConfigurationOption.jsx";

const ConfigurationSettingsNetwork = () => {
  return (
    <div className="configurationSettingsNetwork">
      <div className="configurationSettingsNetworkOptions">
        <NetworkConfigurationOption
          labelEnable="IP v4 NIC #1"
          labelIP="IP Address"
          labelSubnet="Subnet Mask"
          labelGateway="Gateway"
          placeholderIP="0.0.0.0"
          placeholderSubnet="255.255.255.0"
          placeholderGateway="0.0.0.0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
        <NetworkConfigurationOption
          labelEnable="IP v4 NIC #2"
          labelIP="IP Address"
          labelSubnet="Subnet Mask"
          labelGateway="Gateway"
          placeholderIP="0.0.0.0"
          placeholderSubnet="255.255.255.0"
          placeholderGateway="0.0.0.0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
        <NetworkConfigurationOption
          labelEnable="IP v4 NIC #3"
          labelIP="IP Address"
          labelSubnet="Subnet Mask"
          labelGateway="Gateway"
          placeholderIP="0.0.0.0"
          placeholderSubnet="255.255.255.0"
          placeholderGateway="0.0.0.0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
      </div>
      <div className="configurationSettingsNetworkOptions">
        <COMConfigurationOption
          labelEnable="COM PORT #1"
          labelBaudrate="Baud rate"
          labelParity="Parity"
          labelDatabit="Data Bit"
          labelStopbit="Stop Bit"
          placeholderBaudrate="9600"
          placeholderParity="3"
          placeholderDatabit="0"
          placeholderStopbit="0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
        <COMConfigurationOption
          labelEnable="COM PORT #2"
          labelBaudrate="Baud rate"
          labelParity="Parity"
          labelDatabit="Data Bit"
          labelStopbit="Stop Bit"
          placeholderBaudrate="9600"
          placeholderParity="3"
          placeholderDatabit="0"
          placeholderStopbit="0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
        <COMConfigurationOption
          labelEnable="COM PORT #3"
          labelBaudrate="Baud rate"
          labelParity="Parity"
          labelDatabit="Data Bit"
          labelStopbit="Stop Bit"
          placeholderBaudrate="9600"
          placeholderParity="3"
          placeholderDatabit="0"
          placeholderStopbit="0"
          onEnableClick={(isChecked) => {
            console.log("Checkbox is checked:", isChecked);
          }}
        />
      </div>
    </div>
  );
};

export default ConfigurationSettingsNetwork;
