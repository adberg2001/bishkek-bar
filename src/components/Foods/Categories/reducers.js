import { SET_FOOD_CATEGORIES} from "../../../store/action-types";

const initialState = {
  foodCategories: {
    data: null,
    error: null,
  },
};

export default function foodCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOOD_CATEGORIES:
      return {
        ...state,
        foodCategories: {
          [action.dataType]: action.data,
        },
      };
    default:
      return state;
  }
}
