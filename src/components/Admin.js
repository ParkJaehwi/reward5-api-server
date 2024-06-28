import React, { useEffect, useState } from "react";

function Admin({ adminFee, data, totalLotto }) {
  return (
    <div className="admin-container">
      <header className="admin-header">
        Admin:{" "}
        {data.map((item, index) => {
          return item.Key === "admin" ? item.Record : null;
        })}
        원
      </header>
      <main className="admin-main">
        <div>
          <h2>회원 현재 정보</h2>
          {data.map((item, index) => {
            return item.Key === "admin" ||
              item.Key === "lotto" ||
              item.Key === "participants" ||
              item.Key.startsWith("recommended_by_") ? null : (
              <div key={index}>
                ID: {item.Key} 포인트: {item.Record}
              </div>
            );
          })}
        </div>
      </main>
      <footer className="admin-footer">
        Lotto총 금액:{" "}
        {data.map((item, index) => {
          return item.Key === "lotto" ? item.Record : null;
        })}
        원
        <br />
        Lotto참여자:{" "}
        {data.map((item, index) => {
          return item.Key === "participants" ? item.Record + ", " : null;
        })}
      </footer>
    </div>
  );
}

export default Admin;
