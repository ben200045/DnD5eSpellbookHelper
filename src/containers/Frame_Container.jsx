import React from "react";
import Spell_CardList from "./Spell_Card_Container";
import Navbar_Container from "./Navbar_Container";
import Details_Container from "./Details_Container";
import styles from "../css/Frame_Container.module.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Frame_Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favouritesTab: false,
			spellURL: "",
			favouritedSpells: [],
		};
	}

	render() {


		const getTabLocation = (tabLocation) => {
			this.setState({ tabLocation });
		};

		const getSpellURL = (spellURL) => {
			this.setState({ spellURL });
		};

		//TODO: this is a MESS
		const getFavouritedSpells = (favouritedSpell) => {
			const appendedList = this.state.favouritedSpells.concat(favouritedSpell);
			if(this.state.favouritedSpells.some((spell) => spell.name === favouritedSpell.name) && this.state.favouritesTab === false) {
				 this.setState({favouritedSpells: this.state.favouritedSpells.filter((spell) => spell.name !== favouritedSpell.name),}) 
				 toast.error(favouritedSpell.name +' Favourite Removed', {
					position: "top-left",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					});
				
				} else {
				 this.setState({ favouritedSpells: appendedList })
				toast.success(favouritedSpell.name +' Favourite Added', {
					position: "top-left",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					});
				 }
		};


		
		return (
			<div className={styles.frame}>
				<Navbar_Container getTabLocation={getTabLocation} />
				<ToastContainer />
				<div className={styles.maincontent} key={this.props.favourites}>
					{this.props.favourites ? (
						<Spell_CardList
							favourites={this.props.favourites}
							getSpellDetails={[getSpellURL, getFavouritedSpells]}
							favouritedSpells={this.state.favouritedSpells}
						/>
					) : (
						<Spell_CardList
							getSpellDetails={[getSpellURL, getFavouritedSpells]}
							favouritedSpells={this.state.favouritedSpells}
						/>
					)}

					<Details_Container spellURL={this.state.spellURL} />
				</div>
			</div>
		);
	}
}
