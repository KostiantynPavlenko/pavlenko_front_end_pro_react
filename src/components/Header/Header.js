import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from './Header.module.css'

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
      <nav className={styles.header__navigation}>
        <div>Main</div>
        <div>Contacts</div>
        <div>About</div>
        <div>Todo</div>
      </nav>
      <button className={styles['change-theme-button']} onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}