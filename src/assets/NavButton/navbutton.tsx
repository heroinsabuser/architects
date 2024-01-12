import styles from './navbutton.module.css'

const NavButton = ({children}:any)  =>{
    return(
        <button className={styles.navbutton}>
            <p style={{margin:"3px 0"}}>{children}</p>
        </button>
    )
}

export default NavButton;