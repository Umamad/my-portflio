const INITIAL_STATE = {
    dir : 'rtl'
};

const langReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_LANG':
            return{
                ...state,
                dir : action.payload
            };
        default:
            return state;
    }
};

export default langReducer;