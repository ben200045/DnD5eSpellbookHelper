import React from 'react';
import styles from '../css/Spell_Card.module.css';

export default class Spell_Card_Details extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    render () {
        return (
            <>
                <div className={styles.spell_card_details}>
                    {this.props.name}
                    {/* {this.props.}       */}
                </div>
            </>
        );
    }
}