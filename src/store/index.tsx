// 6 tạo store
import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

// 12 tạo middleware saga, sau đó apply vào store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
