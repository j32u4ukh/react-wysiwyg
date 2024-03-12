import Counter from "./Counter";
import Styles from './List.module.css';

export default function List(props) {
  return (
    <li className={Styles.item}>
      <div className={Styles.name}>{props.name}</div>
      <span>${props.price}</span>
      <Counter />
    </li>
  );
}