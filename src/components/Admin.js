import React, { useEffect, useState } from "react";
import "./Admin.css"
function Admin({ adminFee, data, totalLotto }) {
  return (
    <div className="form-container1">
      <main className="admin-main">
        <div className="userList">
          <h2 className="admin_h">회원 현재 정보</h2>
          {data.map((item, index) => {
            return item.Key === "admin" ||
              item.Key === "lotto" ||
              item.Key === "participants" ||
              item.Key.startsWith("recommended_by_") ? null : (
              <div key={index} className="user_list">
                <table className="admin_table">
                  <tr>
                    <td>ID: </td>
                    <td className="admin_td">{item.Key}</td>
                    <td>포인트: </td>
                    <td>{item.Record}</td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="admin-footer">
        <p className="admin_p">Lotto 총 금액:{" "}</p>
        <span className="fontsize">
          {data.map((item, index) => {
            return item.Key === "lotto" ? item.Record : null;
          })}
          포인트
        </span>
      </footer>
    </div>
  );
}

export default Admin;
