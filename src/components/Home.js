import React from 'react'
import No1 from "./img/1.jpg";
import No2 from "./img/2.png";
import No3 from "./img/3.png";
import No4 from "./img/4.png";
function Home() {
  return (
    <div>
      
      <img src={No1} className='post'/>
      <div className='home_memo'>
        <h1>포인트 적립의<br/> 모든 순간<br/> 우리와 함께</h1><br/> 
        <h4>더 많이 적립하고,<br/> 더 많이 누리세요.<br/>
        </h4>
      </div>
      <img src={No2} className='post2'/>
      <img src={No3} className='post3'/>
      <img src={No4} className='post3'/>
    </div>
  )
}

export default Home