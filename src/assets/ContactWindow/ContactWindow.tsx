import style from "./ContactWindow.module.css";
import CancelButton from "../CancelButton/CancelButton";
import { useForm } from "react-hook-form";

const ContactWindow = ({ active, setActive }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={active ? style.windowactive : style.window}>
      <div className={active ? style.contentactive : style.content}>
        <div className={style.title}>
          <span className={style.titletext}>Ask a question</span>
          <CancelButton
            onClick={() => setActive(false)}
            className={style.cancel}
          />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={style.input}
            {...register("name", { required: "Required!" })}
            placeholder="Name"
          />
          <div className={style.error}>
            {errors?.name && <p>{errors?.name?.message?.toString()}</p>}
          </div>
          <input
            {...register("phone", {
              required: "Required!",
              maxLength: {
                value: 13,
                message: "Maximum 13 symbols",
              },
              minLength: {
                value: 11,
                message: "Minimum 11 symbols",
              },
            })}
            className={style.input}
            placeholder="Phone Number"
          />
          <div className={style.error}>
            {errors?.phone && <p>{errors?.phone?.message?.toString()}</p>}
          </div>
          <input
            {...register("mail", { required: "Required!" })}
            className={style.input}
            placeholder="E-mail"
          />
          <div className={style.error}>
            {errors?.mail && <p>{errors?.mail?.message?.toString()}</p>}
          </div>
          <input className={style.input} placeholder="Interested In" />
          <div></div>
          <input
            {...register("large", { required: "Required!" })}
            className={style.inputlarge}
            placeholder="Message"
          />
          <div className={style.error}>
            {errors?.large && <p>{errors?.large?.message?.toString()}</p>}
          </div>
          <div>
            <input
              {...register("check", { required: "Required!" })}
              type="checkbox"
              name="check"
            />
            <label className={style.label} htmlFor="check">
              By submitting an application you agree to the policy <br></br>
              confidentiality{" "}
              <div className={style.error}>
                {errors?.check && <p>{errors?.check?.message?.toString()}</p>}
              </div>
            </label>
          </div>
          <button className={style.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactWindow;
