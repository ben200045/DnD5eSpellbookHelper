import React from 'react';
import Spell_CardList from '../components/Spell_CardList';
import Navbar_Container from './Navbar_Container';
import styles from '../css/Frame_Container.module.css';

export default class Frame_Container extends React.Component {
    render() {
        return (
            <div className={styles.frame}>
                <Navbar_Container />
                <Spell_CardList />
            </div>
        );
    }
}