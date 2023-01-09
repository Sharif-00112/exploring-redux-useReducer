export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log(action);
            const addedPatient = {
                name: action.name,
                id: action.name + '-' + state.patients.length
            };
            const newPatients = [...state.patients, addedPatient];

            return {
                ...state,
                patients: newPatients
            };

        case 'REMOVE_PATIENT':
            console.log(action);
            const removedPatient = {
                name: action.name,
                id: action.name + '-' + state.patients.length
            };
            const newPatients2 = [...state.patients, removedPatient];

            return {
                ...state,
                patients: newPatients2
            };

        default:
        //   throw new Error();
            return state;
    }
}
