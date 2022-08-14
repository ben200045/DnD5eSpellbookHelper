import React from 'react';
import styles from '../css/Navbar.module.css';
import logo from '../assets/DD-logo.png';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";

export default class NavTitle extends React.Component {
    render() {
        return (
            <>
                <div className={styles.nav_header_l}>
                    <img src={logo}></img><div className={styles.header_font}>
                    Dungeons and Dragons 5e Spellbook App</div>
                </div>
                
                    <Link className={styles.navbtn} to="/">Spells</Link>
                    <Link className={styles.navbtn} to="/favourites">Favourites</Link>

                <div className={styles.nav_header_r}>

                </div>
            </>
        );
    }
}