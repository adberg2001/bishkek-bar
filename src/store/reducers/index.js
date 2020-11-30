import { combineReducers } from "redux";
import homeReducer from "../../components/Home/home-reducer"

export default combineReducers({
    home: homeReducer,
});