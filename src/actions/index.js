export const SET_FEEDBACK = "SET_FEEDBACK";
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const ADD_GUESS = "ADD_GUESS";
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const SET_AURAL_STATUS = "SET_AURAL_STATUS";
export const setAuralStatus = auralStatus => ({
  type: SET_AURAL_STATUS,
  auralStatus
});