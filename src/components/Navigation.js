import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import logo from "./logo.png"

import { LuUserPlus } from "react-icons/lu";
import { LuUserX } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

function Navigation() {
  return (
    
    <div className="navigation">
        <img src={logo} className='logo'></img>
        <ul>
            <li>
                <Link to="/" className="navi"><LuUserPlus className='n_icon'/>계정</Link>
            </li>
            <li>
                <Link to="/payment" className="navi"><LuUsers className='n_icon'/>결제</Link>
            </li>
            <li>
                <Link to="/gift" className="navi"><MdPayment className='n_icon'/>선물</Link>
            </li>
            <li>
                <Link to="/delete" className="navi"><LuUserX className='n_icon'/>삭제</Link>
            </li>
            <li>
                <Link to="/admin" className="navi"><GrMoney className='n_icon'/>관리자</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation