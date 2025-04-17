import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchEducationData = createAsyncThunk(
    'education/fetchData',
    async () => {
        const response = await StoreService.getEducationData();
        return response.education;
    }
);

const initialState = {
    page: '',
    navElements: [],
    selected: null,
    selectedSub: null,
    isLoading: false,
    error: null
};

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
            state.selectedSub = null;
        },
        setSelectedSub: (state, action) => {
            state.selectedSub = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducationData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEducationData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.page = action.payload?.page || '';
                state.navElements = Array.isArray(action.payload?.allEducation)
                    ? action.payload.allEducation.map((item, index) => ({
                        ...item,
                        link: index === 0 ? '' : item.title || ''
                    }))
                    : [];
                state.education = action.payload || {}; // Убедитесь, что данные сохраняются
            })
            .addCase(fetchEducationData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = educationSlice.actions;
export default educationSlice.reducer;
