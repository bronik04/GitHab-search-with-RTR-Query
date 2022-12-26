import {configureStore} from "@reduxjs/toolkit";
import {githabApi} from "./githab/githab.api";

export const store = configureStore({
    reducer: {
        [githabApi.reducerPath]: githabApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githabApi.middleware)
})