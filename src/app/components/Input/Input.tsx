import React from "react";
import styles from "./InputName.module.css";

const InputName = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="number"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className={styles.input}
          placeholder="90210"
          required
        />
      </form>
    </div>
  );
};

export default InputName;
