import React from 'react';
import Spell_Card_Details from '../components/Spell_Card_Details';
import Spell_Card_Heart from '../components/Spell_Card_Heart';
import styles from '../css/Spell_Card.module.css';

export default class Spell_Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    render() {
        return (
            <div className={styles.spell_card}>
                <Spell_Card_Details 
                    {...this.props}
                />
               <Spell_Card_Heart /> 
            </div>
        );
    }
}