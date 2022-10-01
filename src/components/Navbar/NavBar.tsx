import { NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./NavBar.module.css";
import NavBarIcon from "./navbar.svg";

const NavBar = (): JSX.Element => {
    
  return (
    <nav className={styles.navbar}>
      <NavBarIcon />
      <div className={styles.links}>
        <CustomLink  to="/"> Home </CustomLink>
        <CustomLink to="/characters"> Characters </CustomLink>
      </div>
    </nav>
  );
};

export default NavBar;
