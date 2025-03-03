import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchActivityData = createAsyncThunk(
    'activity/fetchData',
    async () => {
            const response = await StoreService.getActivityData();
            console.log('Деятельность данные:', response); 
            return response;
        
    }
);

const initialState = {
    page: '',
    banner: {
        title: '',
        description: ''
    }, 
    navElements: [],
    selected: null,
    loading: false,
    error: null
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivityData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActivityData.fulfilled, (state, action) => {
                state.loading = false;
                state.page = action.payload.page;
                state.banner = action.payload.banner;
                state.navElements = action.payload.navElements;
                state.error = null;
            })
            .addCase(fetchActivityData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected } = activitySlice.actions;
export default activitySlice.reducer;
