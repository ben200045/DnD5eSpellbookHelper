import React from 'react';
import Spell_CardList from './Spell_Card_Container';
import Navbar_Container from './Navbar_Container';
import Details_Container from './Details_Container';
import styles from '../css/Frame_Container.module.css';

export default class Frame_Container extends React.Component {
    render() {
        return (
            <div className={styles.frame}>
                <Navbar_Container />
                <div className={styles.maincontent}>
                    <Spell_CardList />
                    <Details_Container />
                </div>
            </div>
        );
    }
}