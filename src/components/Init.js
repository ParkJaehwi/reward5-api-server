import React, { useState } from "react";
import { init } from "../services/api";

const Init = () => {
  const [a, setA] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await init({ a });
      setMessage(response.data === "" ? `"${a}" 님의 회원가입 성공!` : "중복된 ID입니다");
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div className="form-group">
      <label>회원가입</label>
      <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
      <br />
      ID:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="ID를 입력하세요"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input type="submit" value="회원가입" className="btn btn-primary" onClick={_onClick} />
    </div>
  );
};

export default Init;
