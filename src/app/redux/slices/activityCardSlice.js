import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StoreService from "../../../shared/api/service";

export const getActivityCard = createAsyncThunk(
    "activityCard/getActivityCard",
    async () => {
        const response = await StoreService.getActivityCard();
        console.log('Data card:', response.data);
        return response.data;
    }
);

const initialState = {
    card: [],
    isLoading: false,
    isError: null,
};

const activityCardSlice = createSlice({
    name: "activityCard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getActivityCard.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getActivityCard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.card = action.payload;
                state.isError = null;
            })
            .addCase(getActivityCard.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || 'Произошла ошибка';
                state.card = [];
            });
    },
});

export default activityCardSlice.reducer;
