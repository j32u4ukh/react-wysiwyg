import List from "../components/List";
import Styles from '../css/Restaurant.module.css'


export default function Restaurant(){
    const menu = [
      {
        name: "蘆筍沙拉",
        price: 100,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=1"
      },
      {
        name: "辣炒空心菜",
        price: 120,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=2"
      },
      {
        name: "雞蛋豆腐",
        price: 150,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=3"
      },
      {
        name: "鳳梨蝦球",
        price: 300,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=4"
      },
      {
        name: "糖醋雞丁",
        price: 200,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=5"
      },
      {
        name: "砂鍋魚頭",
        price: 500,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=6"
      },
      {
        name: "竹筍炒肉絲",
        price: 150,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=7"
      },
      {
        name: "梨山高麗菜",
        price: 120,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=8"
      },
      {
        name: "五更腸旺",
        price: 250,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=9"
      },
      {
        name: "客家小炒",
        price: 250,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=10"
      },
      {
        name: "三杯杏鮑菇",
        price: 180,
        isLimited: false,
        image: "https://picsum.photos/80/80?random=11"
      },
      {
        name: "黃金開口笑",
        price: 250,
        isLimited: true,
        image: "https://picsum.photos/80/80?random=12"
      }
    ];

    return (
      <div className={Styles.wrapper}>        
        <div className={Styles.container}>
          <h1 className={Styles.title}>React 熱炒店</h1>
          <ul>
            {menu.map((item, index) => {
                return (<List
                    key={item.name}
                    item={item}
                    index={index}
                ></List>)
            })}
          </ul>
        </div>
      </div>
      );
}