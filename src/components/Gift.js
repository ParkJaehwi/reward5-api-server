import React, { useState} from "react";
import { giftAB } from "../services/api";
import "../App.css";



const Gift = () => {
  const [gift, setGift] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async() =>{
    try {
      const response = await giftAB({ gift });
      setMessage(response.data === "" ? `${gift}}님에게 포인트 선물 성공!` : null);
      console.log(response.data);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div className="form-group">
      <label>포인트 선물</label>
      <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
      <br />
      선물 받을 ID:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="ID를 입력하세요"
        value={gift}
        onChange={(e) => setGift(e.target.value)}
      />
      <input type="submit" value="입력" className="btn btn-primary" onClick={_onClick} />
    </div>
  );
};

export default Gift;
