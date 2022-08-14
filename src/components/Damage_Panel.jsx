import React from 'react';
import styles from '../css/Details_Container.module.css';

export default class Damage_Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    render() {
        return (
            <div className={styles.damage_panel}>
                
            </div>
        );
    }
}

