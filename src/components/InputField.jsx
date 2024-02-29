import InputFieldWrapper from "./style/input";

export default function InputField ({ value, label, name, placeholder, type, onChange }) {
  return (
    <InputFieldWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputFieldWrapper>
  );
}