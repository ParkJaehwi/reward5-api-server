import React, { useState } from 'react';
import Admin from "./Admin";
import DrawLotto from './DrawLotto';

// App 컴포넌트
const Admin_page = ({data}) => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setIsLoggedIn(false);
      setError('비밀번호가 틀렸습니다');
    }
  };

  return (
    <div className="form-group">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
          <label className="form-lable">비밀번호: </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      ) : (
        <>
          <Admin data={data}></Admin><DrawLotto />
          <header className="admin-header">
            Admin:{" "}
            {data.map((item, index) => {
              return item.Key === "admin" ? item.Record : null;
            })}
            원
          </header>
        </>
        
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Admin_page;