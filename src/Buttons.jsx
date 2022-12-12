import React from 'react';
import { useDispatch } from 'react-redux';

const Buttons = () => {

    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch({ type: 'plus' });

    }

    const handleDec = () => {
        dispatch({ type: 'minus' });
    }

    const handleRandom = () => {
        dispatch({type: 'random' , payload: Math.floor(Math.random(0, 10) * 100)})
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleRandom}>random</button>
        </div>
    );
};

export default Buttons;