import React from "react";
import "../../common/styles/customInputStyle.css"

const CustomInput = ({ type, id, label, placeholder }) => {
  return (
    <div className="customInput">
      <label className="customLabel" htmlFor={id}>{label}</label>
      <input className="customInput" type={type} name={id} id={id} placeholder={placeholder} />
      <hr />
    </div>
  );
};

export default CustomInput;
