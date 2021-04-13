import React from "react";
interface InputProps {
  label: string;
  onchange: (e: any) => void;
  value: any;
  type: string;
  required: boolean;
  placeholder?: string;
  idd: string;
}

const Input = (props: InputProps) => {
  const { label, onchange, value, type, required, placeholder, idd } = props;
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{margin: '5px 0 5px 0', color: 'white', textTransform: 'capitalize'}}>
      <label htmlFor={idd}>{label}</label>
      </div>
      <div>
      <input
      style={{width: '95%', height: '25px', padding: '2px 10px', outline: 'none', border: 'none', marginBottom: '10px'}}
        onChange={onchange}
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        id={idd}
      />
      </div>
    </div>
  );
};

export default Input;
