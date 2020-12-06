import { SET_DEPARTMENTS} from "../../../../store/action-types";

const initialState = {
  departments: {
    data: null,
    error: null,
  },
};

export default function departmentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: {
          [action.dataType]: action.data,
        },
      };
    default:
      return state;
  }
}
