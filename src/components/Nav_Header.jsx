import React from 'react';
import styles from '../css/Navbar.module.css';
import logo from '../assets/DD-logo.png';

export default class NavTitle extends React.Component {
    render() {
        return (
            <div className={styles.nav_header}>
                <img src={logo}></img><div className={styles.header_font}>
                Dungeons and Dragons 5e Spellbook App</div>
            </div>
        );
    }
}