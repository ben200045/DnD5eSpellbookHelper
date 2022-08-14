import React from 'react';
import styles from '../css/Details_Container.module.css';
import Damage_Label from './Damage_Label';

export default class Damage_Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            
        }
    }



    render() {   

        return (
            
            <div className={styles.damage_panel} key={Object.keys(this.props.damage_at_slot_level)}>
                <div className={styles.damage_panel_header}>Damage</div>
                {
                    Object.keys(this.props.damage_at_slot_level).map((key) => {
                        return ( 
                        <Damage_Label 
                            key={key}
                            level={key}
                            damage={this.props.damage_at_slot_level[key]}
                        />
                        )
                        
                    }
                    )
                }

            </div>
        );
    }
}

