import {createStore} from 'redux';
import {guessingGameReducer} from './reducer'; 

export default createStore(guessingGameReducer);