import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './membership/reducers'; 

const store = configureStore({
  reducer: {
    membership:rootReducer
  },
});

export default store;
