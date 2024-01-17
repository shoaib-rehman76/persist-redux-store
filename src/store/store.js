
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // Import correctly
import counterReducer from "./cardReducer";

const persistConfig = {
    key: 'root',
    storage: storage // Provide the storage function
};
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

// removing the previously persisted data which is not in the intial state
// await persistor.purge();

