import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "user",
    storage, // Stores in localStorage
};

// Wrap userReducer with persistReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const appStore = configureStore({
    reducer: {
        user: persistedUserReducer, // Use persisted reducer
    },
});

export const persistor = persistStore(appStore);

export default appStore;
