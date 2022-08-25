import React from "react";
import styles from "../css/Details_Container.module.css";

export default function Description_Panel(props) {
  return (
    <div className={styles.description_panel}>
      {props.description.map((description, index) => {
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
