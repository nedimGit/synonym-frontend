import actionTypes from '../constants/action-types';

export const setAllWords = data => {
  return {
    data,
    type: actionTypes.SET_ALL_WORDS,
  };
};
export const setWords = data => {
  return {
    data,
    type: actionTypes.SET_WORDS,
  };
};

export const replaceWords = data => {
  return {
    data,
    type: actionTypes.REPLACE_WORD,
  };
};

export const removeWord = data => {
  return {
    data,
    type: actionTypes.REMOVE_WORD,
  };
};

export const setSynonyms = data => {
  return {
    data,
    type: actionTypes.SET_SYNONYMS,
  };
};

export const setWord = data => {
  return {
    data,
    type: actionTypes.SET_WORD,
  };
};

export const setSynonym = data => {
  return {
    data,
    type: actionTypes.SET_SYNONYM,
  };
};
