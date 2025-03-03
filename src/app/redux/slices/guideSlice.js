import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchGuideData = createAsyncThunk(
    'guide/fetchData',
    async () => {
        const response = await StoreService.getGuideData();
        return response;
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

const guideSlice = createSlice({
    name: 'guide',
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
            .addCase(fetchGuideData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGuideData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.page = action.payload.page;
                state.navElements = action.payload.navElements;

                // Находим первый элемент с подменю
                const firstWithSubmenu = action.payload.navElements.findIndex(
                    item => item.twoLink?.length > 0
                );

                // Если найден элемент с подменю, устанавливаем его
                if (firstWithSubmenu !== -1) {
                    state.selected = firstWithSubmenu;
                    state.selectedSub = 0;
                } else {
                    state.selected = 0;
                    state.selectedSub = null;
                }
            })
            .addCase(fetchGuideData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = guideSlice.actions;
export default guideSlice.reducer;
