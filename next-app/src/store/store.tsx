import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import userSlice from "@/feature/user.slice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
