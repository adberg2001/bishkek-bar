const initialState = {
    home: null
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case "HOME":
            return {
                ...state,
                home: action.data,
            };
        default:
            return state;
    }
}