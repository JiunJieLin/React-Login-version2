const FormField = ({ id, label, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=""
      />
    </div>
  );
};

export default FormField;
