import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from '../src/storage/reducer';

import './index.css';

import App from './components/app/App';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const qwe =()=>storage.removeItem('persist:root');
// qwe()  //очистка sorage;

export const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
);

