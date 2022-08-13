import React from 'react';
import styles from '../css/Details_Container.module.css';

export default class Details_Container extends React.Component {
    render() {
        return (
            <div className={styles.details_container}>
                <div className={styles.details_borderbox}>
                    <div className={styles.details_header}>
                    </div>
                    <div className={styles.damage_header}>
                    </div>
                </div>
                <div className={styles.details_description}>
                    <b>Description:</b><br />
                </div>
            </div>
        );
    }
}