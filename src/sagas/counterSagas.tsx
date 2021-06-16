// 10
import { INCREMENT, DECREMENT } from "../actions/actionTypes";
// takeEvery khi thực hiện một hành động nào đó, nó sẽ gọi một hàm trước khi dispatch vào reducers
import { takeEvery } from "redux-saga/effects";

function* increment(action: {}) {
  console.log(`This is increment saga`, action);
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log(`This is decrement saga`);
}

export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement)
}
