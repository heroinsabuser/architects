import Righticon from "../Icons/righticon";
import style from './SlideButton.module.css'
const SlideButton = ({children, black, onClick}:any) => {
    const buttonVariant = {
        background: black ? '#333' : '',
        color: black ? '#fff' : ''
    }
    
    return (
        <button onClick={onClick} style={buttonVariant} className={style.slidebutton}>
            <div className={style.content}>
                <span style={buttonVariant} className={style.text}>{children}</span>
                <Righticon color='#333333' />
            </div>
        </button>
    );
};

export default SlideButton;