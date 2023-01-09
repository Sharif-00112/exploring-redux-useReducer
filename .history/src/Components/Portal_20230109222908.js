import React, { useReducer } from 'react';
import { portalReducer } from '../reducers/portalReducer';
import { portalState } from '../store/portalStore';

// here, reducer and state are in different page

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer, portalState);

    return (
        <div>
            <h2>My Doctors Portal</h2>
            <h3>Has Patients: {state.patients.length}</h3>
        </div>
    );
};

export default Portal;