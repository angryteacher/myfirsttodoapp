import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "Pages/Users/reduxToolKit";

const store = configureStore({
  reducer: {
    user: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
