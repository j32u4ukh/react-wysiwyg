import List from "../components/List";
import Styles from '../css/Restaurant.module.css'


export default function Restaurant(){
    const menu = [
        { name: "蘆筍沙拉", price: 100 },
        { name: "辣炒空心菜", price: 120 },
        { name: "雞蛋豆腐", price: 150 },
        { name: "鳳梨蝦球", price: 300 },
        { name: "糖醋雞丁", price: 200 },
        { name: "砂鍋魚頭", price: 500 },
        { name: "竹筍炒肉絲", price: 150 },
        { name: "梨山高麗菜", price: 120 },
        { name: "五更腸旺", price: 250 },
        { name: "客家小炒", price: 250 },
        { name: "三杯杏鮑菇", price: 180 }
    ];

    return (
      <div className={Styles.wrapper}>        
        <div className={Styles.container}>
          <h1 className={Styles.title}>React 熱炒店</h1>
          <ul>
            {menu.map((item, index) => {
                return (<List
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    index={index}
                ></List>)
            })}
          </ul>
        </div>
      </div>
      );
}