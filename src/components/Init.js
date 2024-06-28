import React, { useState } from "react";
import { initAB } from "../services/api";
import "../App.css";

const Init = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await initAB({ id });
      setMessage(response.data === "" ? `${id}}님의 회원가입 성공!` : "중복된 ID입니다");
      console.log(response.data);
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
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input type="submit" value="Create" className="btn btn-primary" onClick={_onClick} />
    </div>
  );
};

export default Init;
