import React from "react";
const SearchInput = ({ className, placeholder, type, handleChange }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      handleChange={handleChange}
    />
  );
};

export default SearchInput;
