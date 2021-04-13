import React from "react";
interface InputProps {
  label: string;
  onchange: () => {};
  value: any;
  type: string;
  required: boolean;
  placeholder?: string;
  idd: string;
}

const index = (props: InputProps) => {
  const { label, onchange, value, type, required, placeholder, idd } = props;
  return (
    <div>
      <label htmlFor={idd}>{label}</label>
      <input
        onChange={onchange}
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        id={idd}
      />
    </div>
  );
};

export default index;
