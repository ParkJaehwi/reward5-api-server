import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Admin from "./components/Admin";
import Init from "./components/Init";
import Recommender from "./components/Recommender"
import Payment from "./components/Payment";
import Search from "./components/Search";
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
        <Navigation/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/recommender" element={<Recommender />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/search" element={<search />} />
          </Routes>
        </div>
      <div className="main_right">
        <Admin adminFee={adminFee} userPoint={userPoint} totalLotto={totalLotto}></Admin>
      </div>
    </div>);
}

export default App;
