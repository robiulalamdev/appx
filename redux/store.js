// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api/api";
import userReducer from "./features/user/userSlice";

// Persist config for reducers that need to be persisted
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"], // Only persist the user reducer
};

// Combine persisted reducers
const persistedReducers = combineReducers({
  user: userReducer, // Add other reducers here if you want them persisted
});

// Combine non-persisted reducers
const nonPersistedReducers = combineReducers({
  [api.reducerPath]: api.reducer, // Non-persisted API reducer
  // Add other non-persisted reducers here
});

// Persist the persistedReducers
const persistedRootReducer = persistReducer(persistConfig, persistedReducers);

// Final root reducer combining persisted and non-persisted reducers
const rootReducer = combineReducers({
  persisted: persistedRootReducer, // Persisted part of the store
  nonPersisted: nonPersistedReducers, // Non-persisted part of the store
});

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(api.middleware), // Adding API middleware for RTK Query
});

// Persistor to manage persistence
export const persistor = persistStore(store);

// Enables additional behaviors such as refetchOnFocus/refetchOnReconnect for RTK Query
setupListeners(store.dispatch);
