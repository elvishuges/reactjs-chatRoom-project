export const types = {
    click: "form/click",
    add: "form/add"
};

const initialState = {
    newValue: 1000
};

export default function form(state = initialState, action) {
    console.log(action);
    console.log('state', state);
    switch (action.type) {
        case types.click:
            return {
                ...state,
                newValue: action.newValue
            };
        case types.add:
            return {
                ...state,
                newValue: state.newValue + 1
            };
        default:
            return state;
    }
};

export const Creators = {
    clickButton: (value) => ({
        type: types.click,
        newValue: value
    }),

    addContador: (value) => ({
        type: types.add,
        newValue: value
    })
};