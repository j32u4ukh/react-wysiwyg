import { useState } from "react";
import ShoppingCarHeader from "../components/ShoppingCarHeader";
import ProductList from "../components/ProductList";
import { Provider } from "../context";

export default function ShoppingCar() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const contextValue = {
    orders,
    addOrder
  };

  return (
    <div>
      <Provider value={contextValue}>
        <ShoppingCarHeader />
        <ProductList />
      </Provider>
    </div>
  );
}
