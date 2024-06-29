import React, { useState } from "react";
import { payment } from "../services/api";

function Payment() {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [point, setPoint] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await payment({ id, price, point });
      setMessage(response.data === "" ? `'${id}'님이 ${point}P를 사용하여 총 ${price}원 결제완료` : "중복된 ID입니다");
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div>
      <div class="form-group">
      <label className="form-lable">결제</label>
        <h5 className=".form-h5" style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
        <span className="fontsize">Me:{" "}</span>
        <input
          className="form-control"
          type="text"
          placeholder="결제할 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <span className="fontsize">가격:{" "}</span>
        <input
          className="form-control"
          type="text"
          placeholder="결제 금액"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className="fontsize">사용할 포인트:{" "}</span>
        <input
          className="form-control"
          type="text"
          placeholder="사용할 포인트"
          value={point}
          onChange={(e) => setPoint(e.target.value)}
        />
        <input id="PaymentAB" type="submit" value="결제" className="btn btn-primary" onClick={_onClick} />
      </div>
    </div>
  );
}

export default Payment;
