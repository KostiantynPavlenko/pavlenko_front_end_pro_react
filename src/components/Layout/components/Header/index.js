import { useContext } from "react";
import { NavLink } from "react-router";

import { ThemeContext } from "../../../../contexts/ThemeContext";

import styles from './Header.module.css'

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
      <nav className={styles.header__navigation}>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/todo">Todo</NavLink>
      </nav>
      <button className={styles['change-theme-button']} onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}