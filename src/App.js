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
import Navigation from "./components/Navigation";

function App() {
  const [adminFee, setAdminFee] = useState(99999999);
  const [userPoint, setUserPoint] = useState(852);
  const [totalLotto, setTotalLotto] = useState(1000000);

  return (
    <div className="App">
      <div className="main_left">
        <Navigation/>
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
