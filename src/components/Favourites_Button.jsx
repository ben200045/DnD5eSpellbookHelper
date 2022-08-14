import React from 'react';
import Nav_Header from '../containers/Nav_Header';

import styles from '../css/Navbar.module.css';

export default class Favourites_Btn extends React.Component{
    render () {
        return (
            <div className={styles.container}>
                <Nav_Header />
                <div className={styles.favourites_btn} onClick={() => this.props.getFavouritedSpell(this.props.url)}></div>
            </div>
        );
    }
}