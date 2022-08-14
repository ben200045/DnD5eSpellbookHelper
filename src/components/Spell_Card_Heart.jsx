import React from 'react';
import styles from '../css/Spell_Card.module.css';

export default class Spell_Card_Heart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isFavourited: false,
        }
    }



    render () {
        return (
            <>
                <div className={styles.spell_card_heart} onClick={() => this.props.getFavouritedSpell(this.props.url)}></div>
            </>
        );
    }
}