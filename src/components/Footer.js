import React from 'react'
import "../App.css"
import allright from "./img/allright24.png"

function Footer() {
  return (
    <div className='footer'>
      <div className='footerInfo'>
        <p>상호 : REWARD5 대표자 : 권오현</p>
        <p>주소 : 충청남도 천안시 동남구 백석대학로 1 본부동 512호</p>
        <p>사업자 등록번호 : 123-00-98765 사업자 정보확인통신판매업신고번호 : 제2019-충남천안-9999호 호스팅서비스 사업자 : REWARD5</p>
        <p>TEL : 1234-1234 Email: koh1234@reward5.com</p>
        <p className='footer_p'>© REWARD5 Corp. All Right Reserved.</p>
      </div>
      <img src={allright} className='allright'></img>
    </div>
  )
}

export default Footer