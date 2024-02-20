import { configureStore } from '@reduxjs/toolkit';
import membership from './membership/reducers'; 
import people from './people/reducer';

const store = configureStore({
  reducer: {
    membership:membership,
    people: people
  },
});

export default store;
