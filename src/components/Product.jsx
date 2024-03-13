import { useContext } from "react";
import context from "../context";

const Product = ({ id, name }) => {
  const { addOrder } = useContext(context);

  return (
    <li className="border-bottom p-2 text-center">
      <label className="me-3">{name}</label>
      <button
        className="btn btn-info"
        onClick={() => {
          addOrder(id);
        }}
      >
        +
      </button>
    </li>
  );
};

export default Product;
