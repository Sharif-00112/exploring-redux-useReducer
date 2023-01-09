export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log(action);
            const addedPatient = {
                name: action.name,
                id: action.name + state.patients.length
            };
            const newPatients = [...state.patients, addedPatient];

            return {
                ...state,
                patients: newPatients
            };

        default:
        //   throw new Error();
            return state;
    }
}
