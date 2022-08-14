import React from 'react';
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
                    spell_cards: json, 
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
        const {spell_details, isLoaded} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

        return (
            <div className={styles.details_container}>
                <div className={styles.details_borderbox}>
                    <div className={styles.details_header}>
                    </div>
                    <div className={styles.damage_header}>
                    </div>
                </div>
                <div className={styles.details_description}>
                    <b>Description:</b><br />
                </div>
            </div>
        );
    }
}}