import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const guessingGameReducer = (state=initialState, action) => {
  if(action.type === actions.ADD_GUESS){
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }
  else if (action.type === actions.SET_FEEDBACK){
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }
  else if (action.type === actions.SET_AURAL_STATUS){
    return Object.assign({}, state, {
      auralState: action.auralStatus
    })
  }
  else if (action.type === actions.RESTART_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }
  return state;
}