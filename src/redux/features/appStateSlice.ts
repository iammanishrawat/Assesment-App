import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  clearAll,
  getToken,
  getUser,
  removeItem,
  setToken,
  setUser,
  storageKey,
} from "helpers/storage";
import { RootState } from "redux/store";
import { authService } from "services";
import BaseService from "services/Base";

type AppState = {
  user: any;
  token?: string | null;
  isLoading?: boolean;
  isLoaded?: boolean;
  isShowSidebar?: boolean;
  isMobileView?: boolean;
  isTabView?: boolean;
};

export const getUserFromStore = createAsyncThunk(
  "auth/getUserFromStore",
  async (param: any, {dispatch}) => {
    const user: any = await getUser();
    const token = await getToken();

    return { user, token };
  }
);

export const logoutStore = createAsyncThunk("auth/logoutStore", async () => {
  await authService.signOutUser({});
  return await clearAll();
});

const initialState: AppState = {
  user: null,
  token: null,
  isLoading: false,
  isLoaded: false,
  isShowSidebar: false,
  isMobileView: false,
  isTabView: false
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<any>) => {
      const { user, token, isRememberMe, isPublicLink = false } = action.payload;
      state.user = user;
      state.token = token;
      BaseService.setAuthToken(token);
      if (!!isRememberMe) {
        setToken(token);
        setUser(user);
      }else if(!isPublicLink) {
        removeItem(storageKey.token);
        removeItem(storageKey.user);
      }
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.user = action?.payload?.data;
      const user = getUser();
      if(!!user && !!action?.payload?.data) setUser(action?.payload?.data);
    },
    updateWindowWidth: (state, action: PayloadAction<any>) => {
      const width = action?.payload?.width;
      if(width) {
        state.isShowSidebar = width < 768 ? false : true;
        state.isMobileView = width < 768;
        state.isTabView = width < 991;
      }  
    },
    updateIsShowSidebar: (state, action: PayloadAction<any>) => {
      state.isShowSidebar = action?.payload?.show;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserFromStore.pending, (state, action) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(
        getUserFromStore.fulfilled,
        (state, action: PayloadAction<any>) => {
          const {
            user,
            token
          } = action.payload;
          state.user = user;
          state.token = token;
          BaseService.setAuthToken(state.token || "");
          state.isLoading = false;
          state.isLoaded = true;
        }
      )
      .addCase(getUserFromStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
      });
    builder
      .addCase(logoutStore.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isShowSidebar = true;
        clearAll();
        BaseService.setAuthToken("");
      })
      .addCase(logoutStore.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {
  setAppState,
  updateUser,
  updateWindowWidth,
  updateIsShowSidebar
} = appStateSlice.actions;

export default appStateSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.appState.user;
export const selectCurrentToken = (state: RootState) => state.appState.token;
export const selectIsLoading = (state: RootState) => state.appState.isLoading;
export const selectIsLoaded = (state: RootState) => state.appState.isLoaded;
export const selectIsShowSidebar = (state: RootState) =>
  state.appState.isShowSidebar;
export const selectIsMobileView = (state: RootState) => state.appState.isMobileView;
export const selectIsTabView = (state: RootState) => state.appState.isTabView