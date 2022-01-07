import { createSlice } from "@reduxjs/toolkit";
import { callApiToolkit } from "Store/common/apiActionsAsync";
import { RequestType } from "Common/requestType";

// Interfaces
interface IUsersList {
  users: any[];
  loading: boolean;
  error: null | boolean | string;
}

interface IUserAction {
  type: string;
  payload?: any;
}
// -----------------

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const usersInitialState = {
  users: [],
  loading: false,
  error: null,
} as IUsersList;

export const fetchUsers = callApiToolkit<IUser[]>({
  url: "users",
  method: RequestType.GET,
  actionType: "USERS/GET_USERS",
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action: IUserAction) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
