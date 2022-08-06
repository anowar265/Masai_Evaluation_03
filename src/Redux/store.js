import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  loginReducer,
});

export const store = createStore(
  loginReducer
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // add your reducers here

console.log(store.getState());
