import React from 'react';
import styles from '../css/Details_Container.module.css';

export default function Details_Panel(props)  {



        return (
            <div className={styles.details_panel}>
                <div className={styles.details_grid}>
                    <div className={styles.details_grid_item}>
                    <statname>Name:</statname> {props.name}<hr/>
                    <statname>Range:</statname> {props.range}<hr/>
                    <statname>Damage Type:</statname> {props.damage ? props.damage.damage_type.name : ' N/A '}<hr/> 
                    <statname>Attack Type:</statname> {props.attack_type ? props.attack_type : ' N/A '}<hr/>
                    <statname>School:</statname> {props.school.name}<hr/>
                    <statname>Classes:</statname> {props.classes.map((class_) =>
                        {
                            return class_.name
                        }).join(', ')}<hr/>
                   <statname>Subclasses:</statname> {props.subclasses.map((subclass) =>
                        {
                            return subclass.name
                        }).join(', ')}<hr/>
                    </div>
                    <div className={styles.details_grid_item}>
                    <statname>Concentration:</statname> {props.concentration ? "True" : "False"}<hr/>
                    <statname>Ritual:</statname> {props.ritual ? 'True' : ' N/A '}<hr/>
                    <statname>Duration:</statname> {props.duration}<hr/>
                    <statname>Level:</statname> {props.level}<hr/>
                    <statname>Material:</statname> {props.material ? props.material : ' N/A '}<hr/>
                    </div>
                </div>    
            </div>
        );

}

