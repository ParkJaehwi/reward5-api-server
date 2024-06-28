import React, { useState } from "react";
import { gift } from "../services/api";
import "../App.css";

const Gift = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await gift({ sender, receiver, amount });
      setMessage(response.data === "" ? `${receiver}}님에게 포인트 선물 성공!` : null);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div className="form-group">
      <label>포인트 선물</label>
      <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
      <br />
      선물 보내는 ID:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="보내는 ID"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <br />
      선물 포인트:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="선물할 포인트"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      선물 받을 ID:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="받는 ID"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <br />
      <input type="submit" value="포인트 선물하기" className="btn btn-primary" onClick={_onClick} />
    </div>
  );
};

export default Gift;
