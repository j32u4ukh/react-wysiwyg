import { useContext } from "react";
import context from "../context";

const ShoppingCarHeader = () => {
  const { orders } = useContext(context);

  return (
    <header className="bg-light py-3 d-flex justify-content-center align-items-center">
      購物車 (${orders.length})
      <hr />
    </header>
  );
};

export default ShoppingCarHeader;
