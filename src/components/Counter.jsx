import { useState } from "react";

export default function Counter(){    
  const [couter, setCouter] = useState(0);

  const addCount = () => {
    setCouter(state => state + 1)
  }

  const reduceCount = () => {
    setCouter(state => state - 1)
  }

  return (
    <span>
        <button type='button' onClick={addCount}>+</button>
        <button type='button' onClick={reduceCount}>-</button>
        <span>{couter}</span>
    </span>
  );
}