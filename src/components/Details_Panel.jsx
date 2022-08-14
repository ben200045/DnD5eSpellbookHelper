import React from 'react';
import styles from '../css/Details_Container.module.css';

export default class Details_Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }


    //TODO: Conditional rendering on types of spell details | damage-type
    render() {
        return (
            <div className={styles.details_panel}>
                <div className={styles.details_grid}>
                    <div className={styles.details_grid_item}>
                    Name: {this.props.name}<br/>
                    Range: {this.props.range}<br/>
                    Damage Type: 
                    {this.props.damage.damage_type ? 'yes' : 'no'}<br/> 
                    Attack Type: {this.props.attack_type}<br/>
                    School: {this.props.school.name}<br/>
                    Classes: {this.props.classes.map((class_, index) =>
                        {
                            return class_.name
                        }).join(', ')}<br/>
                    Subclasses: {this.props.subclasses.map((subclass, index) =>
                        {
                            return subclass.name
                        }).join(', ')}<br/>
                    </div>
                    <div className={styles.details_grid_item}>
                        Alignment: {this.props.alignment}<br/>
                        Ritual: {this.props.ritual}<br/>
                        Duration: {this.props.duration}<br/>
                        Level: {this.props.level}<br/>
                        Material: {this.props.material}<br/>
                    </div>
                </div>    
            </div>
        );
    }
}

