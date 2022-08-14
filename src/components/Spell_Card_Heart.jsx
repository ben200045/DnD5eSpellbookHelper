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
        var obj = {
            name: this.props.name,
            url: this.props.url,
        };
        return (
            <>
                <div className={styles.spell_card_heart} 
                onClick={
                    () => this.props.getFavouritedSpell(obj)}>
                    {/* {this.props.isFavourited ? 
                        <img src={require('../images/heart_filled.png')} alt="heart"/> :
                        <img src={require('../images/heart_empty.png')} alt="heart"/>
                    } */}
                ♥</div>
            </>
        );
    } 
     
}