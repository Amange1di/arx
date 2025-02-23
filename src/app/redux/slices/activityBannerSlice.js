import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StoreService from "../../../shared/api/service";

export const getActivityBanner = createAsyncThunk(
    "banner/getActivityBanner",
    async () => {
            const { data } = await StoreService.getActivityBanner();
            console.log('Data baner:', data);
            return data;
            }
);

const initialState = {
    banner: null,
    isLoading: false,
    isError: null,
};

const activityBannerSlice = createSlice({
    name: "activityBanner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getActivityBanner.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getActivityBanner.fulfilled, (state, action) => {
                state.isLoading = false;
                state.banner = action.payload || {};
            })
            .addCase(getActivityBanner.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    },
});

export default activityBannerSlice.reducer;
