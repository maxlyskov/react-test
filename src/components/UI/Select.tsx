import React from "react";

interface SelectProps {
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  classNames?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  onChange,
  options,
  classNames,
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={`border-[#A3A4AB)] border rounded-md px-3 py-2 outline-none select ${classNames}`}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
