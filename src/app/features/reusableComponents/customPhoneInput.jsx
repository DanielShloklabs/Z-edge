import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const CustomPhoneInput = ({ type, id, label, placeholder }) => {
  const [phone, setPhone] = useState("");
  return (
    <div className="customInput">
      <label className="customLabel" htmlFor={id}>
        {label}
      </label>
      <div>
        <PhoneInput
          defaultCountry="in"
          value={phone}
          id={id}
          placeholder={placeholder}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
      <hr />
    </div>
  );
};

export default CustomPhoneInput;
