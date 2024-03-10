import { useParams, useSearchParams, useLocation } from "react-router-dom";

const Product = () => {
  const params= useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let location = useLocation();
  console.log(`location: ${JSON.stringify(location)}`);  
  /*
  useLocation() 獲取當前 url 的各種屬性，你可以得到以下資訊

    {
    pathname: "/hello/world",
    search: "?filter=123",
    hash: "#menu",
    state: null,
    key: "12345"
    }
    
    pathname：URL 路徑
    search：Query String Params
    hash：用於確定頁面滾動的具體位置
    state：對於 window.history.state 的包裝
    key：每個 Location 對象擁有一個唯一的 key，可以實現數據緩存
  */

  console.log(searchParams.get("qid")); // 12
  console.log(searchParams.getAll("qid")); // [12]

  const changeSearchParams = () => {
    setSearchParams({
      name: "foo",
      qid: "456"
    });
  };

  return (
    <div>
        <h1>useParams ID: {params.id}</h1>
        <h2>useSearchParams:</h2>
        <div>{searchParams.get("qid")}</div>
        <button className="btn" onClick={changeSearchParams}>
            change Search Params
        </button>
    </div>
 );
}

export default Product;