// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.56.102:8001", // 서버 주소 설정
});

export const init = (data) => api.get(`/init?a=${data.a}`);
export const recommender = (args) => api.get(`/recommender?me=${args.myId}&recommender=${args.yourId}`);
export const deleteAccount = (name) => api.get(`/delete?name=${name}`);
export const gift = (args) => api.get(`/gift?sender=${args.sender}&receiver=${args.receiver}&amount=${args.amount}`);
export const payment = (args) => api.get(`/payment?user=${args.id}&amount=${args.price}&pointsToUse=${args.point}`);
export const lotto = (user) => api.get(`/lotto?user=${user}`);
export const drawLotto = () => api.get("/drawLotto");
export const queryAll = () => api.get("/queryAll");
