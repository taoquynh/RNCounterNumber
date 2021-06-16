// 2
import {INCREMENT, DECREMENT} from './actionTypes';

// Tăng với giá trị step
export const increaseAction = (step: number) => {
    return {
        type: INCREMENT,
        payload: step
    }
}

// Giảm với giá trị step
export const decreaseAction = (step: number) => {
    return {
        type: DECREMENT,
        payload: step,
    }
}