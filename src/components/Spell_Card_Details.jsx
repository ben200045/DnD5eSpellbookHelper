import React from 'react';
import styles from '../css/Spell_Card.module.css';

export default class Spell_Card_Details extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    // componentDidMount(){
    //     const apiCall = 'https://www.dnd5eapi.co';
    //     fetch(apiCall+this.props.url)
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 spell_details: json,
                    
    //             });
    //             console.log(this.state.spell_details);
    //         }).catch(err => {
    //         console.log(err);
    //     }
    //     );
    // }

 

    render () {



        // const {spell_details, isLoaded} = this.state;
        // if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        //     console.log(spell_details.results);

        return (
            
                <div className={styles.spell_card_details} onClick={
                        () => this.props.getSpellURL(this.props.url)
                    }>
                    {this.props.name}<br/>
                    {/* {spell_details.school.name}<br/>
                    {spell_details.classes.map(class_ => 
                        {
                            return class_.name
                        }).join(', ')}<br/> */}
                </div>
            
        );
    }
}
