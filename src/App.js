import "./App.css";
import { Route, Routes } from "react-router-dom";


import Init from "./components/Init";
import Payment from "./components/Payment";
import Gift from "./components/Gift";
import Lotto from "./components/Lotto";
import Navigation from "./components/Navigation";
import Admin_page from "./components/Admin_page";

function App() {
  

  return (
    <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/admin" element={<Admin_page />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
