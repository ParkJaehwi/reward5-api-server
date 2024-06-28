import React, { useState } from "react";
import { drawLotto } from "../services/api";

function DrawLotto() {
  const [message, setMessage] = useState("");

  const _onClick2 = async () => {
    try {
      const response = await drawLotto();
      setMessage(response.data === "" ? `로또 추첨 중` : response.data);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div>
      <h5 className=".form-h5" style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
      <input type="submit" value="로또 추첨" className="btn btn-primary" onClick={_onClick2} />
    </div>
  )
}

export default DrawLotto