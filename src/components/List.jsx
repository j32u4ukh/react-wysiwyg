export default function List(props) {
  const { name, price } = props;
  return (
    <li>
      <span>{name}</span>
      <span>${price}</span>
    </li>
  );
}