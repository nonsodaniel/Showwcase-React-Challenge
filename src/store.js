import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import _ from 'lodash'
import rootReducer from "./store/reducers/rootReducer";

const initialState = {};

const middleWare = [thunk];

// export const saveState = (key, state) => {
//   try {
//     if ((_.isEmpty(state))) {
//       localStorage.removeItem(key);
//       return
//     }
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem(key, serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
