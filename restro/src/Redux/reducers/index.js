import { combineReducers } from "redux";
import {
  userReducer,
  foodReducer,
  cartReducer,
  changeReducer,
} from "./reducers";

const rootReducer = combineReducers({
  userReducer,
  foodReducer,
  cartReducer,
  changeReducer,
});

export default rootReducer;
