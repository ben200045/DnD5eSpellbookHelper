import React from 'react';
import styles from '../css/Navbar.module.css';
import logo from '../assets/DD-logo.png';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";

export default class NavHeader extends React.Component {
    constructor (props) {
        super(props);    
    }




    render() {
        return (
            <>
                <div className={styles.nav_header_l}>
                    <img src={logo}></img><div className={styles.header_font}>
                    Dungeons and Dragons 5e Spellbook App</div>
                </div>
                    <Link className={styles.navbtn} to="/" onClick={() => false}>Spells</Link>
                    <Link className={styles.navbtn} to="/favourites" onClick={() => true}>Favourites</Link>
                <div className={styles.nav_header_r}>

                </div>
            </>
        );
    }
}