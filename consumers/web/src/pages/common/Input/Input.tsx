import React from "react";
import "./style.scss";

const Index = ({
  type = "text",
  disabled = false,
  onKeyPress = () => {},
  onKeyDown = () => {},
  onChange = (e:any) => {},
  onClick = () => {},
  onBlur = () => {},
  placeholder = "",
  value = undefined,
  style = {},
  minValue = 0,
  maxValue = 100000,
  error = false,
  id = `${new Date().valueOf()}`,
  autoFocus = false,
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  React.useMemo(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className="input-container">
      <input
        style={
          error
            ? { ...style, border: "1px solid tomato", paddingLeft: 10 }
            : { ...style, paddingLeft: 10 }
        }
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        disabled={disabled}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onBlur={onBlur}
        min={minValue}
        max={maxValue}
        id={id}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Index;
