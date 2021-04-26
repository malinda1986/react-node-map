import React from "react";
import Select from "react-select";

// const defaultOptions = [{ value: "", label: "" }];
const Index = ({
  isMulti = false,
  name = "",
  options = [],
  isLoading = false,
  className = undefined,
  style = {},
  error = false,
  selectStyle= {},
  ...props
}) => {
  return (
    <div
      style={!error ? { ...style } : { ...style, border: "1px solid tomato" }}
    >
      <Select
        options={options}
        isMulti={isMulti}
        name={name}
        className={className}
        isLoading={isLoading}
        styles={selectStyle}
        {...props}
      />
    </div>
  );
};

export default Index;
