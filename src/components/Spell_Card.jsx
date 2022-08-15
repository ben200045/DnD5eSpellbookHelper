import React from "react";
import Spell_Card_Details from "./Spell_Card_Details";
import Spell_Card_Heart from "./Spell_Card_Heart";
import styles from "../css/Spell_Card.module.css";

export default class Spell_Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
		};
	}

	render() {
		return (
			<div className={styles.spell_card}>
				<Spell_Card_Details
					name={this.props.name}
					url={this.props.url}
					getSpellURL={this.props.getSpellDetails[0]}
				/>

				<Spell_Card_Heart
					getFavouritedSpell={this.props.getSpellDetails[1]}
					name={this.props.name}
					url={this.props.url}
				/>
			</div>
		);
	}
}
