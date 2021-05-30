import React from "react";

function Input({ label, name, type, value, setValue }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type="text"
        id={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default Input;
