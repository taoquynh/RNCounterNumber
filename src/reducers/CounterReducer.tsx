// 3
import { INCREMENT, DECREMENT } from "../actions/actionTypes";

// state không thay đổi, chỉ trả về giá trị cuối cùng
const counterReducers = (state = 0, action: { type: string, payload: number}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducers;