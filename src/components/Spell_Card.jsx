import React from 'react';
import Spell_Card_Details from './Spell_Card_Details';
import Spell_Card_Heart from './Spell_Card_Heart';
import styles from '../css/Spell_Card.module.css';

export default class Spell_Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            // spellURL: '',
        }
    }

    render() {

        // const getSpellURL = (spellURL) => {
        //     this.setState({spellURL});
        //   }
//TODO: this code looks wonky, fix it
    return (
        <div className={styles.spell_card}>
            {this.props.getSpellDetails ? 
                <Spell_Card_Details
                name={this.props.name}
                url={this.props.url} 
                getSpellURL={this.props.getSpellDetails[0]}
                /> : 
                <Spell_Card_Details 
                    // spellURL={this.props.spellURL}
                    // getSpellDetails={this.props.getSpellDetails}
                />
            }
            {this.props.getSpellDetails ?
            <Spell_Card_Heart 
                getFavouritedSpell={this.props.getSpellDetails[1]}
                name={this.props.name}
                url={this.props.url}
            /> :
            <Spell_Card_Heart 

            />
            }

        </div>
    );

    
    }
}
