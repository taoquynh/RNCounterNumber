import { combineReducers } from "redux";
import counterReducers from './CounterReducer'

export const rootReducers = combineReducers({
  counterReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
