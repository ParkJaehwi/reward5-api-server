import React, {useState} from "react";
import { lottoAB } from "../services/api";


function Lotto() {
  const [id, setId] = useState("");
  const [point, setPoint] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async() => {
    try{
      const response = await Lotto({id, point});
      console.log(response);
      setMessage(response.data === ""? `${id}님의 참여가 되었습니다.` : null);
      console.log(response.data);
    } catch (error){
      setMessage("에러 발생");
    }
  }

  return(
    <div>
      <div class="form-group">
        <lable>동행 복권, 행복 나눔</lable>
        <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
        <br />
        참여자 ID:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="참여할 ID"
          value={id}
          onChange={(e) => setId(e.target.value)
          }ng-model="abstore2.userLotto"/>
          <input type="submit" value="입력" className="btn btn-primary" onClick={_onClick} ng-click="lottoAB()"/>
      </div>
      <div>
      <input type="submit" value="추첨" className="btn btn-primary" onClick={_onClick} ng-click="drawLotto()"/>
      </div>
      
    </div>
    );
};

export default Lotto;
