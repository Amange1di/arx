import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchScienceData = createAsyncThunk(
    'ology/fetchData',
    async () => {
        const response = await StoreService.getScienceData();

        console.log('ology  data:', response);

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

const scienceSlice = createSlice({
    name: 'science',
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
            .addCase(fetchScienceData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchScienceData.fulfilled, (state, action) => {
                state.isLoading = false;
                const payload = action.payload.societies || {};
                state.page = payload.page || '';
                state.navElements = Array.isArray(payload.navElements)
                    ? payload.navElements.map((item) => ({
                        ...item,
                        link: item.title, 
                        cards: Array.isArray(item.cards)
                            ? item.cards.map((card) => ({
                                ...card,
                                title: card.title || 'Без названия', 
                                description: card.description || '',
                                number: card.number || '',
                                email: card.email || '',
                                link: card.title || '' 
                            }))
                            : [] 
                    }))
                    : [];
            })
            .addCase(fetchScienceData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = scienceSlice.actions;
export default scienceSlice.reducer;
