import synonymApi from '../../../api/synonym/actions';
import { setAllWords, setSynonym, replaceWords, setSynonyms, setWord, setWords, removeWord } from './action-creators';

export const getAllWords = () => {
  return async dispatch => {
    try {
      const res = await synonymApi.getAllWords();
      const { Data } = res.data;
      if (Data) dispatch(setAllWords(Data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSynonymsForWord = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.getSynonymsForWord(data);
      const { Data } = res.data;
      if (Data) dispatch(setSynonyms(Data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const searchWords = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.searchWords(data);
      const { Data } = res.data;
      if (Data) dispatch(setWords(Data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addWord = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.addWord(data);
      const { Data } = res.data;
      if (Data) dispatch(setWord(Data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addSynonym = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.addSynonym(data);
      const { Data } = res.data;
      if (Data) {
        let synData = {};
        synData.Synonyms = Data;
        synData.Word = data.Synonym;

        dispatch(setSynonym(synData));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const editWord = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.editWord(data);
      const { Data } = res.data;
      if (Data) dispatch(setSynonyms(Data));

      if (Data) dispatch(replaceWords(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteWord = data => {
  return async dispatch => {
    try {
      const res = await synonymApi.deleteWord(data);
      const { Data } = res.data;
      if (Data) dispatch(removeWord(data));
    } catch (e) {
      console.log(e);
    }
  };
};
