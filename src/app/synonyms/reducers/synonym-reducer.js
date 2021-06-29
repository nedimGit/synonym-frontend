import actionTypes from '../constants/action-types.js';

const synonymState = {
  words: [],
  synonyms: [],
};

export const synonymReducer = (state = synonymState, payload) => {
  switch (payload.type) {
    case actionTypes.SET_ALL_WORDS:
      return {
        ...state,
        words: [...payload.data],
      };

    case actionTypes.SET_WORDS:
      return {
        ...state,
        words: [...payload.data],
      };

    case actionTypes.SET_SYNONYMS:
      return {
        ...state,
        synonyms: [...payload.data],
      };

    case actionTypes.SET_WORD:
      return {
        ...state,
        words: [...state.words, ...payload.data],
      };
    case actionTypes.REPLACE_WORD:
      var foundIndex = state.words.findIndex(word => word.Word === payload.data.Word.Word);
      state.words[foundIndex] = payload.data.UpdatedWord;
      return {
        ...state,
        words: [...state.words],
      };

    case actionTypes.REMOVE_WORD:
      var foundWordIndex = state.words.findIndex(word => word.Word === payload.data.Word.Word);
      var foundSynonymIndex = state.synonyms.findIndex(word => word.Word === payload.data.Word.Word);
      state.words.splice(foundWordIndex, 1);
      state.synonyms.splice(foundSynonymIndex, 1);
      return {
        ...state,
        words: [...state.words],
        synonyms: [...state.synonyms],
      };

    case actionTypes.SET_SYNONYM:
      return {
        ...state,
        words: [...state.words, { ...payload.data.Word }],
        synonyms: [...payload.data.Synonyms],
      };

    default:
      return state;
  }
};
