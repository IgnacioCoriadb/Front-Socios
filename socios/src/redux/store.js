import { configureStore } from '@reduxjs/toolkit';
import membership from './membership/reducers'; 

const store = configureStore({
  reducer: {
    membership:membership
  },
});

export default store;
