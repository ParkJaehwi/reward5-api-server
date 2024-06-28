import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { queryAll } from "./services/api";

import Home from "./components/Home";
import Admin from "./components/Admin";
import Admin_page from "./components/Admin_page";
import Init from "./components/Init";
import Recommender from "./components/Recommender"
import Payment from "./components/Payment";
import Gift from "./components/Gift";
import Lotto from "./components/Lotto";
import Navigation from "./components/Navigation";

function App() {
const location = useLocation();
  const currentPath = location.pathname;
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
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/init" element={<Init />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/lotto" element={<Lotto data={data} />} />
            <Route path="/admin" element={<Admin_page data={data}/>} />
          </Routes>
        </div>
        <div className="main_right">
        {currentPath !== "/" && (
        <div className="main_right">
          <Admin data={data} />
        </div>
      )}
      </div>
      </div>
  );
}

export default App;
