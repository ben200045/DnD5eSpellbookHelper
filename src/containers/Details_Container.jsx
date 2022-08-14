import React from 'react';
import Damage_Panel from '../components/Damage_Panel';
import Description_Panel from '../components/Description_Panel';
import Details_Panel from '../components/Details_Panel';
import styles from '../css/Details_Container.module.css';

export default class Details_Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            spell_details: [],
        }
    }

    componentDidMount(){

        fetch('https://www.dnd5eapi.co/api/spells/acid-arrow')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    spell_details: json, 
                });
            }).catch(err => {
            console.log(err);
        }
        );
    }


    componentDidUpdate(prevProps) {

        if (this.props.spellURL !== prevProps.spellURL) {
            this.setState({spellURL: this.props.spellURL});
            fetch('https://www.dnd5eapi.co'+ this.props.spellURL)
                .then(res => res.json())   
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        spell_details: json,
                    });
                }).catch(err => {
                console.log(err);
            }
            );
        }
    }

    render() {
        const {isLoaded} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

        return (
            <div className={styles.details_container}>
                <div className={styles.details_borderbox}>
                    <Details_Panel 
                        {...this.state.spell_details}
                    />
                    <Damage_Panel 
                        {...this.state.spell_details.damage}
                    />
                </div>
                    <Description_Panel 
                        description={this.state.spell_details.desc}
                    />
            </div>
        );
    }
}}