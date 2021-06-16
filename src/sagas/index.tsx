// 11 tạo root chứa tất cả các hàm saga
import { all } from "redux-saga/effects";
import { watchIncrement, watchDecrement } from "./counterSagas";

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement()]);
}
