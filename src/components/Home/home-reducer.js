const initialState = {
    home: null
}

export default function homeReducer(state = initialState, action: { type: string; data: null | object; }) {
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