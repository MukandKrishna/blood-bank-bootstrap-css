import React from "react";
import "./form.css";

const InputType = ({
  labelText,
  placeHolder,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="inputtype">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </div>
    </>
  );
};

export default InputType;
