import React from 'react';
import Spell_CardList from './Spell_Card_Container';
import Navbar_Container from './Navbar_Container';
import Details_Container from './Details_Container';
import styles from '../css/Frame_Container.module.css';

export default class Frame_Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spellURL: "/api/spells/acid-arrow",
            favouritedSpells: [],
            
        }
        
    }
    


    render() {


        const getSpellURL = (spellURL) => {
            this.setState({spellURL});
        }
        
        const getFavouritedSpells = (favouritedSpells) => {
            this.setState({favouritedSpells});
            const appendedList = this.state.favouritedSpells.concat(favouritedSpells);
            this.setState({favouritedSpells: appendedList});
        }


        return (
            
            <div className={styles.frame}>
                <Navbar_Container />
                <div className={styles.maincontent}>
                    <Spell_CardList 
                        getSpellDetails={[getSpellURL,getFavouritedSpells]}
                    />
                    <Details_Container
                        spellURL={this.state.spellURL}
                    />
                </div>
            </div>
        );
    }
}