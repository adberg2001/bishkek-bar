import { combineReducers } from "redux";
import homeReducer from "../../components/Home/home-reducer"
import drawerReducer from "../../components/MainWrapper/Drawer/reducer"
import foodCategoryReducer from "../../components/Foods/Categories/reducers";
import departmentsReducer from "../../components/Departments/Departments/Departments/reducers";

export default combineReducers({
    home: homeReducer,
    drawer: drawerReducer,
    foodsCategories: foodCategoryReducer,
    departments: departmentsReducer
});