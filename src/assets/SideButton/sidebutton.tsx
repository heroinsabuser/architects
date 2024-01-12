import styles from './sidebutton.module.css'

const Sidebutton = ({children, clickFunction}:any) => {
    return (
        <button onClick={clickFunction} className={styles.sidebutton}>
            {children}
        </button>
    );
};

export default Sidebutton;