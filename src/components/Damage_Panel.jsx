import React from "react";
import styles from "../css/Details_Container.module.css";
import Damage_Label from "./Damage_Label";

export default class Damage_Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
		};
	}

	render() {
		const isDamage = () => {
			if (
				this.props.damage_at_slot_level ||
				this.props.damage_at_character_level
			) {
				return true;
			} else {
				return false;
			}
		};

		const damageType = () => {
			if (isDamage()) {
				if (this.props.damage_at_slot_level) {
					return true;
				} else {
					return false;
				}
			} else {
				return console.log("No damage");
			}
		};

		return (
			<div className={styles.damage_panel}>
				<div className={styles.damage_panel_header}>
					{this.props.damage_type ? "Level & Damage" : null}
				</div>
				{isDamage()
					? damageType()
						? Object.keys(this.props.damage_at_slot_level).map((key) => {
								return (
									<Damage_Label
										key={key}
										level={key}
										damage={this.props.damage_at_slot_level[key]}
									/>
								);
						  })
						: Object.keys(this.props.damage_at_character_level).map((key) => {
								return (
									<Damage_Label
										key={key}
										level={key}
										damage={this.props.damage_at_character_level[key]}
									/>
								);
						  })
					: null}
			</div>
		);
	}
}
