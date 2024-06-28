import React, { useState } from "react";
import { recommenderAB } from "../services/api";

function Recommender() {
  const [myId, setMyid] = useState("");
  const [yourId, setYourid] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await Recommender({ myId, yourId });
      console.log(response);
      setMessage(response.data === "" ? `'${myId}'님이 ${yourId}을 추천인으로 등록했습니다.` : null);
      console.log(response.data);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div>
      <div class="form-group">
      <label className="form-lable">추천인 ID 입력</label>
        <h5 className=".form-h5" style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
        <br />
        사용자 ID:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="사용자 ID"
          value={myId}
          onChange={(e) => setMyid(e.target.value)}
        />
        <br />
        추천인 ID:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="추천인 ID"
          value={yourId}
          onChange={(e) => setYourid(e.target.value)}
        />
        <input id="recommenderAB" type="submit" value="Invoke" class="btn btn-primary" onClick={_onClick} />
      </div>
    </div>
  );
}

export default Recommender;
