import "../css/bootstrap.css";
import { useState, useEffect } from "react";

export default function Order(){
    const age = [
        { label: "18歲以下", value: "0" },
        { label: "18歲~29歲", value: "1" },
        { label: "30歲~39歲", value: "2" },
        { label: "40歲~49歲", value: "3" },
        { label: "50歲~59歲", value: "4" },
        { label: "60歲以上", value: "5" }
      ];
    
      const gender = [
        { label: "男性", value: "male" },
        { label: "女性", value: "female" }
      ];
    
      const purpose = [
        { label: "約會聚餐", value: "date" },
        { label: "朋友聚會", value: "friend" },
        { label: "商務用餐", value: "business" },
        { label: "慶祝生日", value: "birthday" },
        { label: "其他", value: "others" }
      ];
    
      const [form, setForm] = useState({
        name: "",
        number: "",
        gender: "male",
        age: age[0].value,
        purpose: [],
        file: ""
      });
    
      const changeNumber = (e) => {
        setForm((state) => ({
          ...state,
          number: parseInt(e.target.value, 10)
        }));
      };
    
      const changeValue = (e) => {
        const name = e.target.name;
    
        setForm((state) => ({
          ...state,
          [name]: e.target.value
        }));
      };
    
      const changePurpose = (e) => {
        const value = e.target.value;
        console.log("value", value);
    
        setForm((state) => {
          if (state.purpose.includes(value)) {
            return {
              ...state,
              purpose: state.purpose.filter((item) => item !== value)
            };
          } else {
            return {
              ...state,
              purpose: [...state.purpose, value]
            };
          }
        });
      };
    
      const changeFile = (e) => {
        // 取得第0筆檔案
        const file = e.target.files[0];
        // FileReader 讀取瀏覽器選中的檔案
        const fileReader = new FileReader();
        // 讀取完改變 img
        fileReader.addEventListener("load", fileLoad);
        // 將圖片繪出，轉換成 Base64 編碼
        fileReader.readAsDataURL(file);
      };
    
      const fileLoad = (e) => {
        // 此處的 e 為 fileReader
        setForm((state) => ({
          ...state,
          file: e.target.result
        }));
      };
    
      useEffect(() => {
        console.log(form);
      }, [form]);
    
      return (
        <div className="container mt-3">
          <h1>React 熱炒店訂購單</h1>
          <form className="my-3">
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                姓名
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={changeValue}
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="num" className="form-label">
                此次用餐人數
              </label>
              <input
                id="num"
                type="number"
                className="form-control"
                value={form.number}
                onChange={changeNumber}
              />
            </div>
    
            <div className="mb-4">
              <label className="form-label">性別</label>
              <div className="d-flex">
                {gender.map((item) => (
                  <div key={item.value} className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id={item.value}
                      value={item.value}
                      onChange={changeValue}
                      checked={form.gender === item.value}
                    />
                    <label className="form-check-label" htmlFor={item.value}>
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
    
            <div className="mb-4">
              <label className="form-label">請選擇您的年齡區間</label>
    
              <select
                className="form-select"
                name="age"
                value={form.age}
                onChange={changeValue}
              >
                {age.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
    
              <h6 className="mt-3">
                您選擇了: {age.find((item) => item.value === form.age).label}
              </h6>
            </div>
    
            <div className="mb-3">
              <label className="form-label">此次用餐目的</label>
              <div className="d-flex">
                {purpose.map((item) => (
                  <div key={item.value} className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item.value}
                      id={item.value}
                      checked={form.purpose.includes(item.value)}
                      onChange={changePurpose}
                    />
                    <label className="form-check-label" htmlFor={item.value}>
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
    
            <div className="mb-3">
              <label className="form-label">相關圖片</label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="upload"
                  onChange={changeFile}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="upload"
                >
                  上傳
                </button>
    
                <img src={form.file} width="100%" alt="" />
              </div>
            </div>
    
            <div className="text-center mt-5">
              <button className="btn btn-primary w-50">送出</button>
            </div>
          </form>
        </div>
      );
}