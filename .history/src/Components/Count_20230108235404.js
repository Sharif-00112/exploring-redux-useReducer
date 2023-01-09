import React, { useReducer } from 'react';

const countState = {
    count: 0
}

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
    }
}

const Count = () => {
    const [ state, dispatch ] = useReducer(countReducer, countState);

    return (
        <div>
            <h1>{state.count}</h1>
        </div>
    );
};

export default Count;