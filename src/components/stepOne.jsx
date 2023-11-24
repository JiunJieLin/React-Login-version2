import FormField from "@/components/formField";
import { useState, forwardRef } from "react";

const StepOne = forwardRef(function StepOne(
  { setCurrentActive, setPrevEnteredValue, setStep1Contact, prevEnteredValue },
  ref
) {
  const [formState, setFormState] = useState({
    name: {
      value: "",
      errorMsg: "",
      validate: (value) =>
        value.trim() === ""
          ? "請輸入名稱"
          : value.split(" ").length === 2 &&
            value
              .split(" ")
              .every((part) => part && part[0] === part[0].toUpperCase())
          ? ""
          : "名稱格式不正確（需要兩個文字，每個文字第一個字大寫並用空格隔開",
    },
    email: {
      value: "",
      errorMsg: "",
      validate: (value) =>
        value.trim() === ""
          ? "請輸入電子信箱"
          : value.includes("@")
          ? ""
          : "請輸入有效的信箱",
    },
    phone: {
      value: "",
      errorMsg: "",
      validate: (value) =>
        value.trim() === ""
          ? "請輸入電話號碼"
          : value.length === 10 && value.startsWith("09")
          ? ""
          : "電話號碼需為 10 碼且開頭為 09",
    },
  });

  const validateField = (name, value) => {
    const fieldState = formState[name];

    // 確保 fieldState 存在且有 validate 函式
    if (fieldState && fieldState.validate) {
      return fieldState.validate(value);
    }

    return ""; // 或者返回默認的錯誤信息
  };
  // const validateField = (name, value) => {
  //   const validationFunc = formState[name].validate; //string
  //   return validationFunc ? validationFunc(value) : "";
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value, errorMsg },
    }));
    setPrevEnteredValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, updatedState } = Object.keys(formState).reduce(
      (acc, key) => {
        const fieldKey = key;
        const errorMsg = validateField(fieldKey, formState[fieldKey].value);
        acc.updatedState[fieldKey] = { ...formState[fieldKey], errorMsg };
        if (errorMsg) acc.isValid = false;
        return acc;
      },
      { isValid: true, updatedState: {} }
    );

    setFormState((prevState) => ({ ...prevState, ...updatedState }));

    if (isValid) {
      // 提交表單操作
      const formData = Object.fromEntries(
        Object.entries(formState).map(([key, { value }]) => [key, value])
      );
      setStep1Contact(formData);
      setPrevEnteredValue(formData);
      setCurrentActive((prev) => prev + 1);
    }
  };
  return (
    <div className=" flex flex-col gap-2 border-2">
      <h1 className="text-3xl font-bold">Personal info</h1>
      <p className="mb-12 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing .
      </p>
      <form ref={ref} onSubmit={handleSubmit}>
        <FormField
          id="name"
          label="Name"
          type="text"
          value={prevEnteredValue.name || formState.name.value}
          onChange={handleInputChange}
          errorMsg={formState.name.errorMsg}
          placeholder="Kim Wang"
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          value={prevEnteredValue.email || formState.email.value}
          onChange={handleInputChange}
          errorMsg={formState.email.errorMsg}
          placeholder="kimwang@gmail.com"
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          value={prevEnteredValue.phone || formState.phone.value}
          onChange={handleInputChange}
          errorMsg={formState.phone.errorMsg}
          placeholder="0913xxxxxx"
        />
      </form>
    </div>
  );
});

export default StepOne;
