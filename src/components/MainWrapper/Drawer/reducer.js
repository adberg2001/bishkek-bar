import {SET_OPEN_DRAWER} from "../../../store/action-types"
const initialState = {
  open: false
}

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_DRAWER:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
}