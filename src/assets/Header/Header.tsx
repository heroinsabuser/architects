import styles from "./style.module.css";
import Icon from "../icon/icon";
import NavButton from "../NavButton/navbutton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <Icon />
          <div className={styles.nav}>
            <NavButton><Link to='/'>MAIN</Link></NavButton>
            <NavButton><Link to='gallery'>GALLERY</Link></NavButton>
            <NavButton><Link to='projects'>PROJECTS</Link></NavButton>
            <NavButton><Link to='certifications'>CERTIFICATIONS</Link></NavButton>
            <NavButton><Link to='contacts'>CONTACTS</Link></NavButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
