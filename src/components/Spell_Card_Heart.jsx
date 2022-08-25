import React from "react";
import styles from "../css/Spell_Card.module.css";

export default function Spell_Card_Heart(props) {


		var obj = {
			name: props.name,
			url: props.url,
		};
		return (
			<>
				<div
					className={styles.spell_card_heart}
					onClick={() => props.getFavouritedSpell(obj)}
				>
					{/* {this.props.isFavourited ? 
                        <div>♥</div> :
                        <div>♡</div>
                    } */}
					♥
				</div>
			</>
		);
	
}
