import React from "react";

function Admin({ adminFee, userPoint, totalLotto }) {
  return (
    <div className="admin-container">
      <header className="admin-header">Admin {adminFee}원</header>
      <main className="admin-main">A {userPoint}P</main>
      <footer className="admin-footer">Lotto총 금액: {totalLotto}원</footer>
    </div>
  );
}

export default Admin;
