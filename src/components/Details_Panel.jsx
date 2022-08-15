import React from 'react';
import styles from '../css/Details_Container.module.css';

export default class Details_Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    render() {
        return (
            <div className={styles.details_panel}>
                <div className={styles.details_grid}>
                    <div className={styles.details_grid_item}>
                    <statname>Name:</statname> {this.props.name}<hr/>
                    <statname>Range:</statname> {this.props.range}<hr/>
                    <statname>Damage Type:</statname> {this.props.damage ? this.props.damage.damage_type.name : ' N/A '}<hr/> 
                    <statname>Attack Type:</statname> {this.props.attack_type ? this.props.attack_type : ' N/A '}<hr/>
                    <statname>School:</statname> {this.props.school.name}<hr/>
                    <statname>Classes:</statname> {this.props.classes.map((class_) =>
                        {
                            return class_.name
                        }).join(', ')}<hr/>
                   <statname>Subclasses:</statname> {this.props.subclasses.map((subclass) =>
                        {
                            return subclass.name
                        }).join(', ')}<hr/>
                    </div>
                    <div className={styles.details_grid_item}>
                    <statname>Concentration:</statname> {this.props.concentration ? "True" : "False"}<hr/>
                    <statname>Ritual:</statname> {this.props.ritual ? 'True' : ' N/A '}<hr/>
                    <statname>Duration:</statname> {this.props.duration}<hr/>
                    <statname>Level:</statname> {this.props.level}<hr/>
                    <statname>Material:</statname> {this.props.material ? this.props.material : ' N/A '}<hr/>
                    </div>
                </div>    
            </div>
        );
    }
}

