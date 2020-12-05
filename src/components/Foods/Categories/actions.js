import {SET_FOOD_CATEGORIES} from "../../../store/action-types";
import request from "../../../request/request";

export function fetchFoodCategories(method, data, url) {
  return async (dispatch) => {
    await request(method, url, data && data)
      .then(response => response.json())
      .then(json => dispatch(fetchFoodCategoriesAction(json, "data")))
      .catch(e => dispatch(fetchFoodCategoriesAction(e, "error")))
  }
}

export function fetchFoodCategoriesAction(data, dataType) {
  return {
    type: SET_FOOD_CATEGORIES,
    data: data,
    dataType: dataType,
  }
}