export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log(action);
            return {
                ...state,
                
            };
        case ' ':
            return {
                ...state,
                
            };
        default:
        //   throw new Error();
            return state;
    }
}
