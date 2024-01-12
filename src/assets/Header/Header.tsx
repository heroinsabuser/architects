import styles from "./style.module.css";
import Icon from "../icon/icon";
import NavButton from "../NavButton/navbutton";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <Icon />
          <div className={styles.nav}>
            <NavButton>MAIN</NavButton>
            <NavButton>GALLERY</NavButton>
            <NavButton>PROJECTS</NavButton>
            <NavButton>CERTIFICATIONS</NavButton>
            <NavButton>Contacts</NavButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
