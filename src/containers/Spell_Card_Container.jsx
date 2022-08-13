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
                    spell_cards: json,
                    
                });
                console.log(this.state.spell_cards);
            }).catch(err => {
            console.log(err);
        }
        );
    }

    

    render () {
        
        const {spell_cards, isLoaded} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(spell_cards.results);
        return(
            <div className={styles.spell_cardlist}>
                {spell_cards.results.map(spell_card => (
                    <Spell_Card 
                        key={spell_cards.results.index} 
                        {...spell_card}
                    />
                ))}
            </div>
        );
    }
}
}