const FormField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  errorMsg,
}) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 p-2 rounded-lg w-full mb-4"
      />
      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
    </div>
  );
};

export default FormField;
