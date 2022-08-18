import { combineReducers } from "redux";
import { userReducer, foodReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
  userReducer,
  foodReducer,
  cartReducer,
});

export default rootReducer;
