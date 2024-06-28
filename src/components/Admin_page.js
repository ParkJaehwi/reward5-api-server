import React, { useState } from 'react';
import Admin from "./Admin";

// App 컴포넌트
const App = () => {
  

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
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>비밀번호: </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      ) : (
        <Admin />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;