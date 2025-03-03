import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchStudentsData = createAsyncThunk(
    'students/fetchData',
    async () => {
        try {
            const response = await StoreService.getStudentsData();
            return response;
        } catch (error) {
            console.error('Error fetching students data:', error);
            throw error;
        }
    }
);

const initialState = {
    page: '',
    navElements: [],
    selected: 0,
    selectedSub: null,
    isLoading: false,
    isError: null
};

const studentsSlice = createSlice({
    name: 'students',
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
            .addCase(fetchStudentsData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStudentsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.page = action.payload.page;
                state.navElements = action.payload.navElements;

                // Находим первый элемент с подменю
                const firstWithSubmenu = action.payload.navElements.findIndex(
                    item => item.twoLink?.length > 0
                );

                if (firstWithSubmenu !== -1) {
                    state.selected = firstWithSubmenu;
                    state.selectedSub = 0;
                } else {
                    state.selected = 0;
                    state.selectedSub = null;
                }
            })
            .addCase(fetchStudentsData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = studentsSlice.actions;
export default studentsSlice.reducer;
