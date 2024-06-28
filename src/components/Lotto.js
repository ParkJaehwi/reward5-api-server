import React, { useState } from "react";
import { lotto, drawLotto } from "../services/api";

function Lotto({ data }) {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const _onClick1 = async () => {
    // participants 배열에 id가 있는지 확인
    const participants = data.find((item) => item.Key === "participants");
    if (participants && participants.Record.includes(id)) {
      setMessage("이미 로또에 참여하셨습니다.");
      return;
    }

    try {
      const response = await lotto(id);
      setMessage(response.data === "" ? `${id}님 로또 참여 완료` : response.data);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

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
      <div className="form-group">
        <label>동행 복권, 행복 나눔</label>
        <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
        <br />
        참여자 ID:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="참여할 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input type="submit" value="로또 참여" className="btn btn-primary" onClick={_onClick1} />
      </div>
      <div>
        <input type="submit" value="로또 추첨" className="btn btn-primary" onClick={_onClick2} />
      </div>
    </div>
  );
}

export default Lotto;
