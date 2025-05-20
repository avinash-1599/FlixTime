import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "user",
    storage, // Stores in localStorage
};

// Wrap userReducer with persistReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedMovieReducer = persistReducer(persistConfig, movieReducer);

const appStore = configureStore({
    reducer: {
        user: persistedUserReducer,
        movies: persistedMovieReducer,
    },
});

export const persistor = persistStore(appStore);

export default appStore;
