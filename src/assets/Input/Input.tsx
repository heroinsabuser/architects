import style from "./Input.module.css";

const Input = ({placeholder, large}:any) => {
    const inputStyle = {
        height: large ? "147px" : "46px"
      };
  
    return (
    <input
      className={style.myinput}
      type="text"
      placeholder={placeholder}
      style={inputStyle}
    />
  );
};

export default Input;
