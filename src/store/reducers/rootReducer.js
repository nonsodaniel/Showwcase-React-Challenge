import { combineReducers } from "redux";
import schoolReducer from "./schoolReducer";


export default combineReducers({
  schoolData: schoolReducer,
});