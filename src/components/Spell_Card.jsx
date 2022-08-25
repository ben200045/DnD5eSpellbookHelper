import React from "react";
import Spell_Card_Details from "./Spell_Card_Details";
import Spell_Card_Heart from "./Spell_Card_Heart";
import styles from "../css/Spell_Card.module.css";

export default function Spell_Card(props) {
  return (
    <div className={styles.spell_card}>
      <Spell_Card_Details
        name={props.name}
        url={props.url}
        getSpellURL={props.getSpellDetails[0]}
      />

      <Spell_Card_Heart
        getFavouritedSpell={props.getSpellDetails[1]}
        name={props.name}
        url={props.url}
      />
    </div>
  );
}
