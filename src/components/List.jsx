export default function List(props) {
  return (
    <li>
      {props.index + 1}. {props.name} ${props.price}
    </li>
  );
}