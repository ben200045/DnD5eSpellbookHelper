import React from 'react';
import Nav_Header from '../components/Nav_Header';
import Spell_CardList from './Spell_Card_Container';
import styles from '../css/Navbar.module.css';

export default class Navbar extends React.Component{
    render () {
        return (
            <div className={styles.container}>
                <Nav_Header />

            </div>
        );
    }
}