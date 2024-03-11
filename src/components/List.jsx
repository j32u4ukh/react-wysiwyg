import Counter from "./Counter";

export default function List(props) {
  return (
    <li>
      <span>{props.index + 1}.</span>
      <span>{props.name}</span>
      <span>${props.price}</span>
      <Counter />
    </li>
  );
}