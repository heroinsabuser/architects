import style from "./Input.module.css";
import { useState } from "react";

const PhoneInput = ({ placeholder }: any) => {
  const [phone, setPhone] = useState("");
  const handleChange = (event: any) => {
    const input = event.target.value;
    const regex = /^\+?[0-9]{0,13}$/;
    if (regex.test(input)) {
      setPhone(input);
    }
  };
  return (
    <input
      className={style.myinput}
      type="tel"
      placeholder={placeholder}
      value={phone}
      onChange={handleChange}
    />
  );
};

export default PhoneInput;
