import React from "react";
import { Provider } from "react-redux";
import Counter from "./src/screens/CounterScreen";
import store from "./src/store";

export default function App() {
  return (
    // 7
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
