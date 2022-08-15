import React from "react";
import styles from "../css/Details_Container.module.css";

export default class Description_Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
		};
	}

	render() {
		return (
			<div className={styles.description_panel}>
				{this.props.description.map((description, index) => {
					return (
						<p className={styles.description_panel_text} key={index}>
							{description}
						</p>
					);
				})}
				<div className={styles.description_panel_img}></div>
			</div>
		);
	}
}
