import List from "../components/List";

export default function Restaurant(){
    return (
        <div>
          <h1>React 熱炒店</h1>
          <ul>
            <List name="蘆筍沙拉" price={100} />
            <List name="辣炒空心菜" price={120} />
            <List name="雞蛋豆腐" price={150} />
          </ul>
        </div>
      );
}