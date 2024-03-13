import { useEffect, useState } from "react";
import Styles from './MemberPage.module.css'

export default function MemberPage() {
  const [state, setState] = useState({});

  const fetchData = () => {
    fetch("https://randomuser.me/api/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setState(data["results"][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={Styles.Page}>
      <h1>React 熱炒店會員資料</h1>

      <div>
        <img src={state.picture?.large} alt="" />
        <br />
        <br />
        姓名：{state.name?.first} <br />
        <br />
        性別：{state.gender} <br />
        <br />
        E-mail：{state.email} <br />
      </div>
    </div>
  );
}
