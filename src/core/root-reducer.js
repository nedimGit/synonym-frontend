import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { synonymReducer } from '../app/synonyms/reducers/synonym-reducer';

const config = {
  key: 'root',
  storage,
};
const rootReducer = persistCombineReducers(config, {
  synonymReducer,
  form: formReducer,
});

export { rootReducer, config };
