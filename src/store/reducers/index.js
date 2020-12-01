import { combineReducers } from "redux";
import homeReducer from "../../components/Home/home-reducer"
import drawerReducer from "../../components/MainWrapper/Drawer/reducer"

export default combineReducers({
    home: homeReducer,
    drawer: drawerReducer,
});