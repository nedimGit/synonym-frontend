import routesConstants from './routes';
import { Api } from '../../core/api';
import { API_BASE_URL } from '../../common/constants';

const getAllWords = async params => {
  return await Api.get(`${API_BASE_URL}${routesConstants.GET_ALL_WORDS}`);
};

const getSynonymsForWord = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.GET_SYNONYMS}`, { Word: params });
};

const addWord = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.ADD_WORD}`, { Word: params });
};

const addSynonym = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.ADD_SYNONYM}`, { Word: params.Word, Synonym: params.Synonym });
};

const editWord = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.UPDATE_SYNONYM}`, { Word: params.Word, UpdatedWord: params.UpdatedWord });
};

const deleteWord = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.DELETE_SYNONYM}`, { Word: params });
};

const searchWords = async params => {
  return await Api.post(`${API_BASE_URL}${routesConstants.SEARCH_WORDS}`, { Word: params });
};

export default {
  getAllWords,
  getSynonymsForWord,
  addWord,
  addSynonym,
  editWord,
  deleteWord,
  searchWords,
};
