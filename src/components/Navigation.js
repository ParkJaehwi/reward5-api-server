import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import logo from "./img/logo.png"

import { LuSendToBack } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

function Navigation() {
  return (
    
    <div className="navigation">
        <Link to="/" className='logoLink'><img src={logo} className='logo'/></Link>
        <ul>
            <li>
                <Link to="/init" className="navi"><LuUsers className='n_icon'/>계정</Link>
            </li>
            <li>
                <Link to="/payment" className="navi"><MdPayment className='n_icon'/>결제</Link>
            </li>
            <li>
                <Link to="/gift" className="navi"><LuSendToBack className='n_icon'/>선물</Link>
            </li>
            <li>
                <Link to="/lotto" className="navi"><GrMoney className='n_icon'/>이벤트</Link>
            </li>
            <li>
                <Link to="/admin" className="navi"><MdSecurity className='n_icon'/>관리자</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation