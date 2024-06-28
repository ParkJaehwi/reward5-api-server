import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { queryAll } from "./services/api";

import Admin from "./components/Admin";
import Admin_page from "./components/Admin_page";
import Init from "./components/Init";
import Recommender from "./components/Recommender"
import Payment from "./components/Payment";
import Gift from "./components/Gift";
import Lotto from "./components/Lotto";
import Navigation from "./components/Navigation";

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await queryAll();
        setData(JSON.parse(response.data));
      } catch (error) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/recommender" element={<Recommender />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/lotto" element={<Lotto data={data} />} />
            <Route path="/admin" element={<Admin_page data={data}/>} />
          </Routes>
        </div>
      </div>
      <div className="main_right">
        <Admin data={data}></Admin>
      </div>
    </>
  );
}

export default App;
