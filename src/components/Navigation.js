import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import logo from "./logo.png"

import { LuUserPlus } from "react-icons/lu";
import { LuUserX } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { GrMoney } from "react-icons/gr";

function Navigation() {
  return (
    
    <div className="navigation">
        <img src={logo} className='logo'></img>
        <ul>
            <li>
                <Link to="/" className="navi"><LuUserPlus className='n_icon'/>회원가입</Link>
            </li>
            <li>
                <Link to="/recommender" className="navi"><LuUsers className='n_icon'/>추천인</Link>
            </li>
            <li>
                <Link to="/payment" className="navi"><MdPayment className='n_icon'/>결제</Link>
            </li>
            <li>
                <Link to="/delete" className="navi"><LuUserX className='n_icon'/>삭제</Link>
            </li>
            <li>
                <Link to="/gift" className="navi"><GoGift className='n_icon'/>
                선물</Link>
            </li>
            <li>
                <Link to="/lotto" className="navi"><GrMoney className='n_icon'/>Lotto</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation