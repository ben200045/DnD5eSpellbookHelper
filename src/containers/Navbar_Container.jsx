import React from 'react';
import Nav_Header from '../components/Nav_Header';
import Spell_CardList from '../components/Spell_CardList';
import styles from '../css/Navbar.module.css';

export default function(){
    return (
        <div className={styles.container}>
            <Nav_Header />

        </div>
    );
}