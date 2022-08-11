import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/Frame_Container.module.css';

export default function(){
    return (
        <div className={styles.frame}>
            <Navbar />
        </div>
    );
}