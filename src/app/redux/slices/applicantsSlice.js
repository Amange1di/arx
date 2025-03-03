import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchApplicantsData = createAsyncThunk(
    'applicants/fetchData',
    async () => {

        const response = await StoreService.getApplicantsData();
        console.log('Applicants data:', response);
        return response;

    }
);

const initialState = {
    page: '',
    navElements: [],
    selected: null,
    loading: false,
    error: null
};

const applicantsSlice = createSlice({
    name: 'applicants',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplicantsData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApplicantsData.fulfilled, (state, action) => {
                state.loading = false;
                state.page = action.payload.page;
                state.navElements = action.payload.navElements;
                state.selected = 0;
            })
            .addCase(fetchApplicantsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected } = applicantsSlice.actions;
export default applicantsSlice.reducer;
