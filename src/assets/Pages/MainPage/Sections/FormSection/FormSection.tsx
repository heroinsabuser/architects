import Righticon from "../../../../Icons/righticon";
import Input from "../../../../Input/Input";
import PhoneInput from "../../../../Input/PhoneInput";
import SlideButton from "../../../../SlideButton/SlideButton";
import style from './FormSection.module.css'

const FormSection = () => {
  return (
    <div style={{marginTop:'120px'}}>
      <h1>Contuct Us</h1>
      <div className={style.content}>
        <div className={style.inputs}>
            <Input placeholder='Name'/>
            <PhoneInput placeholder='Phone Number'/>
            <Input placeholder='E-mail'/>
            <Input placeholder='Interested In'/>
            <Input placeholder='Message' large/>
        </div>
        <div className={style.image}>
            <img src="./image 12.png" alt="" />
        </div>
      </div>
    <div className={style.endbutton}>
        <SlideButton black>Send Email <Righticon color='white'/></SlideButton>
    </div>
    </div>

  );
};

export default FormSection;
