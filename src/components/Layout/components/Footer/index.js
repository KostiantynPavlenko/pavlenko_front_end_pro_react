import { useContext } from "react";

import { ThemeContext } from "../../../../contexts/ThemeContext";

import styles from './Footer.module.css'

export default function Footer() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.footer} ${styles[`mode-${theme}`]}`}>
      <h1>Footer</h1>
    </div>
  );
}