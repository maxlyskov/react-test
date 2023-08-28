interface InputProps {
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  classNames,
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label="Search"
    className={`px-3 py-2 border-[#A3A4AB)] border rounded-md outline-none text-sm ${classNames}`}
  />
);

export default Input;
