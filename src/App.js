import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Admin from "./components/Admin";
import Init from "./components/Init";
import Payment from "./components/Payment";
import Refund from "./components/Refund";
import Gift from "./components/Gift";
import Lotto from "./components/Lotto";
import Delete from "./components/Delete";

function App() {
  const [adminFee, setAdminFee] = useState(99999999);
  const [userPoint, setUserPoint] = useState(852);
  const [totalLotto, setTotalLotto] = useState(1000000);

  return (
    <div className="App">
      <div className="main_left">
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">회원가입</Link>
            </li>
            <li>
              <Link to="/payment">결제</Link>
            </li>
            <li>
              <Link to="/refund">환불</Link>
            </li>
            <li>
              <Link to="/delete">삭제</Link>
            </li>
            <li>
              <Link to="/gift">선물</Link>
            </li>
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
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </div>
      </div>
      <div className="main_right">
        <Admin adminFee={adminFee} userPoint={userPoint} totalLotto={totalLotto}></Admin>
      </div>
    </div>
  );
}

export default App;
