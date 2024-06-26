import React, { useState } from 'react';
import '../App.css';

const Init = () => {
  const [ID, setID] = useState('');
  const [recommend, setRecommend] = useState('');

  return (
    <div className="init-container">
      <form onSubmit={''} className="init-form">
        <div className="form-group">
          <h2>가입 ID</h2>
          <input type="text" id="ID" required/>      
          <h2>추천인 ID</h2>  
            <input type="text" id="ID" required/>
            <p></p>
          <button type="submit" className="submit-button">가입하기</button>
        </div>
      </form>
    </div>
  );
};

export default Init;
