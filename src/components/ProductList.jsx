import Product from "./Product";

const ProductList = () => {
  const menu = [
    { id: 0, name: "雞肉鍋" },
    { id: 1, name: "豬肉鍋" },
    { id: 2, name: "牛肉鍋" },
    { id: 3, name: "海鮮鍋" },
    { id: 4, name: "泡菜鍋" }
  ];

  return (
    <ul className="p-0">
      {menu.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ProductList;
