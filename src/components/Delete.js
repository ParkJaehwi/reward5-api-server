import React, { useEffect, useState } from "react";
import { deleteAccount } from "../services/api";

function Delete() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await deleteAccount(id);
      setMessage(response.data === "" ? `"${id}" 님의 계정 삭제가 완료되었습니다.` : "에러");
    } catch (error) {
      setMessage("에러 발생");
    }
  };
  return (
    <div className="form-group">
      <label>계정 삭제</label>
      <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
      <br />
      ID:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="삭제할 ID 입력"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input type="submit" value="계정 삭제" className="btn btn-primary" onClick={_onClick} />
    </div>
  );
}

export default Delete;
