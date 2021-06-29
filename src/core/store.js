import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducer
import { rootReducer, config } from '../core/root-reducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));

export function configureStore() {
  let store = createStore(rootReducer, {}, enhancers);
  let persistor = persistStore(store);

  return { persistor, store, config };
}
