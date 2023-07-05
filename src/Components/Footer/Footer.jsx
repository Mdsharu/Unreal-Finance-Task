import React from 'react';
import styles from "./Footer.module.css";
import "./DarkTheme.css";


const Footer = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        }
        else {
            setLightMode();
        }
    }
    
  return (
    <div className={styles["footer"]}>
        <div className={styles["divfootercontentleft"]}>
            <span className={styles["text"]}>
                <span>Governance</span>
            </span>
            <span className={styles["text"]}>
                <span>Terms</span>
            </span>
        </div>
        {/* <div className={styles["label"]}>
            <div className={styles["spanthemetogglethumb"]}></div>
        </div> */}
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <div className={styles["spanthemetogglethumb"]}></div>
            </label>
        </div>
    </div>
  )
}

export default Footer;
