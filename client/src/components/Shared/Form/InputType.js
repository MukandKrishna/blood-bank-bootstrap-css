import React, { useState } from "react";
import "./form.css";

const InputType = ({
  labelText,
  placeHolder,
  labelFor,
  inputType,
  value,
  onChange,
  onBlur,
  name,
}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    setIsEmpty(inputValue === '');
    onBlur && onBlur(e);
  };

  return (
    <>
      <div className="inputtype">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className={`form-control ${isEmpty ? 'empty' : ''}`}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeHolder}
        />
        {isEmpty && <p className="empty-message">Field cannot be empty</p>}
      </div>
    </>
  );
};

export default InputType;
