import List from "../components/List";
import Styles from '../css/Restaurant.module.css'


export default function Restaurant(){
  const menu = [
    {
      name: "蘆筍沙拉",
      price: 100,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=1",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "辣炒空心菜",
      price: 120,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=2",
      desrc:
        "這種濃郁的味道真不可思議，獨和極有嚼勁的面搭配起來，獨讓人不禁想要一口接一口"
    },
    {
      name: "雞蛋豆腐",
      price: 150,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=3",
      desrc: "在嘴裡慢慢的融化，這種口感是多麼細緻而高雅"
    },
    {
      name: "鳳梨蝦球",
      price: 300,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=4",
      desrc: "鮮美多汁的內餡<br/>加上香Q的皮，完美的搭配"
    },
    {
      name: "糖醋雞丁",
      price: 200,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=5",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "砂鍋魚頭",
      price: 500,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=6",
      desrc: "這個是....這是高湯焦掉發出的香味"
    },
    {
      name: "竹筍炒肉絲",
      price: 150,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=7",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "梨山高麗菜",
      price: 120,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=8",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "五更腸旺",
      price: 250,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=9",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "客家小炒",
      price: 250,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=10",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "三杯杏鮑菇",
      price: 180,
      isLimited: false,
      image: "https://picsum.photos/80/80?random=11",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
    },
    {
      name: "黃金開口笑",
      price: 250,
      isLimited: true,
      image: "https://picsum.photos/80/80?random=12",
      desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
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