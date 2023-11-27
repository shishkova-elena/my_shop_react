import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import basketSlice from "./basket/basketSlice";
import productsSlice from "./products/productsSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    counter: counterSlice,
    basket: basketSlice,
    products: productsSlice
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore ({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)