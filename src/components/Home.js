import React from 'react'
import No1 from "./img/1.jpg";

function Home() {
  return (
    <div>
      <img src={No1} className='post'/>
      <div className='home_memo'>
        <h1>포인트 적립의<br/> 모든 순간,<br/> 우리와 함께하세요.</h1><br/> 
        <h4>더 많이 적립하고,<br/> 더 많이 누리세요.<br/>
        </h4>
      </div>
    </div>
  )
}

export default Home