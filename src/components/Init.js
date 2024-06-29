// import React, { useState } from "react";
// import { init, recommender, deleteAccount } from "../services/api";
// import "../App.css";

// const Init = () => {
//   const [a, setA] = useState("");
//   const [message1, setMessage1] = useState("");
//   const [message2, setMessage2] = useState("");
//   const [myId, setMyid] = useState("");
//   const [yourId, setYourid] = useState("");
//   const [id, setId] = useState("");
//   const [message3, setMessage3] = useState("");

//   const _onClick1 = async () => {
//     try {
//       const response = await init({ a });
//       setMessage1(response.data === "" ? `"${a}" 님의 회원가입 성공!` : "중복된 ID입니다");
//       console.log(response);
//     } catch (error) {
//       setMessage1("에러 발생");
//     }
//   };

//   const _onClick2 = async () => {
//     try {
//       const response = await recommender({ myId, yourId });
//       setMessage2(response.data === "" ? `'${myId}'님이 ${yourId}을 추천인으로 등록했습니다.` : null);
//     } catch (error) {
//       setMessage2("에러 발생");
//     }
//   };
//   const _onClick3 = async () => {
//     try {
//       const response = await deleteAccount(id);
//       setMessage3(response.data === "" ? `"${id}" 님의 계정 삭제가 완료되었습니다.` : "에러");
//     } catch (error) {
//       setMessage3("에러 발생");
//     }
//   };

//   return (
//     <>
//       <div className="form-container">
//         <div className="form-group">
//           <label className="form-lable">회원가입</label>
//           <h5 className="form-h5">{message1}</h5>
//           <span className="fontsize">ID: </span>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="ID를 입력하세요"
//             value={a}
//             onChange={(e) => setA(e.target.value)}
//           />
//           <input type="submit" value="회원가입" className="btn btn-primary" onClick={_onClick1} />
//         </div>

//         <div class="form-group">
//           <label className="form-lable">추천인 ID 입력</label>
//           <h5 className="form-h5">{message2}</h5>
//           <span className="fontsize">사용자 ID: </span>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="사용자 ID"
//             value={myId}
//             onChange={(e) => setMyid(e.target.value)}
//           />

//           <span className="fontsize">추천인 ID: </span>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="추천인 ID"
//             value={yourId}
//             onChange={(e) => setYourid(e.target.value)}
//           />
//           <input id="recommender" type="submit" value="추천인 등록" className="btn btn-primary" onClick={_onClick2} />
//         </div>

//         <div className="form-group">
//           <label className="form-lable">계정 삭제</label>
//           <h5 className="form-h5">{message3}</h5>
//           <span className="fontsize">ID: </span>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="삭제할 ID 입력"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//           />
//           <input type="submit" value="계정 삭제" className="btn btn-primary" onClick={_onClick3} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Init;

import React, { useState } from "react";
import { init, recommender, deleteAccount } from "../services/api";
import "../App.css";

const Init = () => {
  const [a, setA] = useState("");
  const [message1, setMessage1] = useState("");
  const [myId, setMyid] = useState("");
  const [yourId, setYourid] = useState("");
  const [message2, setMessage2] = useState("");
  const [id, setId] = useState("");
  const [message3, setMessage3] = useState("");

  const handleInit = async () => {
    try {
      const response = await init({ a });
      setMessage1(response.data === "" ? `"${a}" 님의 회원가입 성공!` : "중복된 ID입니다");
    } catch (error) {
      setMessage1("에러 발생");
    }
  };

  const handleRecommender = async () => {
    try {
      const response = await recommender({ myId, yourId });
      setMessage2(response.data === "" ? `'${myId}'님이 ${yourId}을 추천인으로 등록했습니다.` : "에러 발생");
    } catch (error) {
      setMessage2("에러 발생");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await deleteAccount(id);
      setMessage3(response.data === "" ? `"${id}" 님의 계정 삭제가 완료되었습니다.` : "에러 발생");
    } catch (error) {
      setMessage3("에러 발생");
    }
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label className="form-label">회원가입</label>
        <h5 className="form-h5">{message1}</h5>
        <span className="fontsize">ID: </span>
        <input
          className="form-control"
          type="text"
          placeholder="ID를 입력하세요"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input type="submit" value="회원가입" className="btn btn-primary" onClick={handleInit} />
      </div>

      <div className="form-group">
        <label className="form-lable">추천인 ID 입력</label>
        <h5 className="form-h5">{message2}</h5>
        <span className="fontsize">사용자 ID: </span>
        <input
          className="form-control"
          type="text"
          placeholder="사용자 ID"
          value={myId}
          onChange={(e) => setMyid(e.target.value)}
        />
        <span className="fontsize">추천인 ID: </span>
        <input
          className="form-control"
          type="text"
          placeholder="추천인 ID"
          value={yourId}
          onChange={(e) => setYourid(e.target.value)}
        />
        <input
          id="recommender"
          type="submit"
          value="추천인 등록"
          className="btn btn-primary"
          onClick={handleRecommender}
        />
      </div>

      <div className="form-group">
        <label className="form-label">계정 삭제</label>
        <h5 className="form-h5">{message3}</h5>
        <span className="fontsize">ID: </span>
        <input
          className="form-control"
          type="text"
          placeholder="삭제할 ID 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input type="submit" value="계정 삭제" className="btn btn-primary" onClick={handleDeleteAccount} />
      </div>
    </div>
  );
};

export default Init;
