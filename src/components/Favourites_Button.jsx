import React from "react";
import Nav_Header from "../containers/Nav_Header";

import styles from "../css/Navbar.module.css";

export default function Favourites_Btn(props) {
  return (
    <div className={styles.container}>
      <Nav_Header />
      <div
        className={styles.favourites_btn}
        onClick={() => props.getFavouritedSpell(props.url)}
      ></div>
    </div>
  );
}
