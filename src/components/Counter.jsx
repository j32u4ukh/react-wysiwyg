import { useState } from "react";
import Styles from "./Counter.module.css";

export default function Counter(){    
  const [couter, setCouter] = useState(0);

  const addCount = () => {
    setCouter(state => state + 1)
  }

  const reduceCount = () => {
    setCouter(state => state - 1)
  }

  return (
    <div className={Styles["btn-box"]}>
        <button type='button' className={Styles.btn} onClick={addCount}>+</button>
        <button type='button' className={Styles.btn} onClick={reduceCount}>-</button>
        <span className={Styles.number}>{couter}</span>
    </div>
  );
}