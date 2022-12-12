import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Buttons from './Buttons';
import Number from './Number';

const App = () => {

    const initialState = {
        number: 0
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'plus':
                return {
                    ...state,
                    number: state.number + 1
                }
            case 'minus':
                if (state.number <= 0) {
                    return state;
                }
                return {
                    ...state,
                    number: state.number - 1
                }
                case 'random':
                  return {
                    ...state,
                    number: state.number + action.payload
                  }
            default:
                return state;
        }
    };

    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <Number />
            <Buttons />
        </Provider>
    );
};

export default App;