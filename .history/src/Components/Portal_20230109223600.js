import React, { useReducer, useState } from 'react';
import { portalReducer } from '../reducers/portalReducer';
import { portalState } from '../store/portalStore';

// here, reducer and state are in different page

const Portal = () => {
    // complex state using useReducer
    const [state, dispatch] = useReducer(portalReducer, portalState);

    // simple state using useState
    const [name, setName] = useState('');

    return (
        <div>
            <h2>My Doctors Portal</h2>
            <h3>Has Patients: {state.patients.length}</h3>
            <input type="text" name="" id="" onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> dispatch({type: 'ADD_PATIENT'})}>Add</button>
        </div>
    );
};

export default Portal;