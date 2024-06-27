import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { queryAll } from "./services/api";
import Admin from "./components/Admin";
import Init from "./components/Init";
import Payment from "./components/Payment";
import Gift from "./components/Gift";
import Lotto from "./components/Lotto";
import Delete from "./components/Delete";
import Recommender from "./components/Recommender";

function App() {
  const [adminFee, setAdminFee] = useState(99999999);
  const [totalLotto, setTotalLotto] = useState(1000000);

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
      <div className="main_left">
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">회원가입</Link>
            </li>
            /
            <li>
              <Link to="/recommender">추천인</Link>
            </li>
            /
            <li>
              <Link to="/payment">결제</Link>
            </li>
            /
            <li>
              <Link to="/delete">삭제</Link>
            </li>
            /
            <li>
              <Link to="/gift">선물</Link>
            </li>
            /
            <li>
              <Link to="/lotto">Lotto</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/recommender" element={<Recommender />} />
          </Routes>
        </div>
      </div>
      <div className="main_right">
        <Admin adminFee={adminFee} totalLotto={totalLotto} data={data}></Admin>
      </div>
    </div>
  );
}

export default App;
