import { configureStore } from '@reduxjs/toolkit';
import playerReducer from  './reducers';
export default configureStore({
    reducer: {
        playerReducer,
    },
});
