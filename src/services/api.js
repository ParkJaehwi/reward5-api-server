// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.56.102:8001", // 서버 주소 설정
});

export const initAB = (data) => api.get(`/init?a=${data.a}`);
export const recommenderAB = (args) => api.get(`/recommender?me=${args.me}&recommender=${args.recommender}`);
export const deleteAB = (name) => api.get(`/delete?name=${name}`);
export const giftAB = (args) => api.get(`/gift?sender=${args.a}&receiver=${args.b}&amount=${args.amount}`);
export const paymentAB = (args) => api.get(`/payment?user=${args.user}&amount=${args.pay}&pointsToUse=${args.point}`);
export const lottoAB = (user) => api.get(`/lotto?user=${user}`);
export const drawLotto = () => api.get("/drawLotto");
export const queryAll = () => api.get("/queryAll");
