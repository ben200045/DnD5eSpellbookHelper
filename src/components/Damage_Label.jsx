import React from "react";
import styles from "../css/Details_Container.module.css";

export default function Damage_Label(props) {

		return (
			<div className={styles.damage_label}>
				<div>
					{props.level} <statname>|</statname> {props.damage}
				</div>
			</div>
		);
}
