import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Product from "./pages/Product";
import VitePage from "./pages/VitePage";
import Restaurant from "./pages/Restaurant";

export default function App() {
  return (
    // 可以依需求選擇要用 BrowserRouter 或 HashRouter
    // BrowserRouter： 網址沒有 # 字號較美觀，有後端設定，換 url 時會發送 request。
    // HashRouter：網址會帶 # 字號，純前端使用，換 url 時不會發送 request
 
    /* BrowserRouter 可傳入屬性
    1. basename: string，搭配
      <BrowserRouter basename="/lala">
        <Link to="/about"/>
        <Link to="/contact"/>
      </BrowserRouter>

      設定網頁根目錄，上例渲染後會呈現
      <a href="/lala/about">
      <a href="/lala/contact">

    2. forceRefresh: boolean，如為 true 強制刷新頁面
      <BrowserRouter forceRefresh={true} />

    3. keyLength: number，location key 的長度，預設為 6
      <BrowserRouter keyLength={12} />
    */
    <BrowserRouter basename="/">
      {/* Routes 要包在 Route 的外層，在不同的 url 渲染不同的組件
          path：路徑
          element：要渲染的组件 

        * 在跳轉路由時，如果路徑是/開頭的是絕對路由，否則為相對路由，即相對於當前 URL 進行改變 */}
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/routers" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="vite" element={<VitePage />} />

          <Route path="product/:id" element={<Product/>} />

          {/* 全匹配路由
          設定 Route path="*" 在所有路由的最下方，當上面的路徑都沒有匹配到時，就會顯示此組件，可用於 404 找不到頁面 */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/restaurant" element={<Restaurant/>} />
      </Routes>
    </BrowserRouter>
  );
}

