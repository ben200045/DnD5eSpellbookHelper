import React from 'react';
import styles from '../css/Details_Container.module.css';

export default class Damage_Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            
        }
    }



    render() {   

        return (
            
            <div className={styles.damage_panel}>
                {
                    Object.keys(this.props.damage_at_slot_level).map((key) => {
                        return (
                            <div className={styles.damage_panel_item}>
                                <div className={styles.damage_panel_item_header}>
                                    {key}
                                </div>
                                <div className={styles.damage_panel_item_body}>
                                    {this.props.damage_at_slot_level[key]}
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        );
    }
}

