import React, { useEffect, useState } from "react";

function Admin({ adminFee, data, totalLotto }) {
  return (
    <div className="admin-container">
      <header className="admin-header">Admin {/*{data.admin}*/}원</header>
      <main className="admin-main">
        <div>
          <h2>회원 현재 정보</h2>
          {/* {data.map((item, index) => ( */}
            {/* <div key={index}> */}<div>
              ID: {/*{item.Key}*/} 포인트: {/*{item.Record}*/}
            </div>
          {/* ))} */}
        </div>
      </main>
      <footer className="admin-footer">Lotto총 금액: {/*{data.lotto}*/}원</footer>
    </div>
  );
}

export default Admin;
