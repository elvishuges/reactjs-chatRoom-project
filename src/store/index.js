import { createStore,applyMiddleware  } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from "../reducers/duck/reducer.auth";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, auth)

export const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store)