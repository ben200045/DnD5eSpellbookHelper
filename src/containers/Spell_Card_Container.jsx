import React from 'react';
import Spell_Card from './Spell_Card';
import styles from '../css/Frame_Container.module.css';

export default class Spell_CardList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            spell_cards: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        fetch('https://www.dnd5eapi.co/api/spells')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    spell_cards: json.cards,
                });
            }).catch(err => {
            console.log(err);
        }
        );
    }

    render () {
        return(
            <div className={styles.spell_cardlist}>
                {this.state.spell_cards.map(spell_card => ( 
                <Spell_Card 
                    
                />))} );
            </div>
        );
    }
}