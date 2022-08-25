import React from "react";
import styles from "../css/Spell_Card.module.css";

export default function Spell_Card_Details(props) {
  return (
    <div
      className={styles.spell_card_details}
      onClick={() => props.getSpellURL(props.url)}
    >
      {`-=- ` + props.name}
      <br />
    </div>
  );
}
