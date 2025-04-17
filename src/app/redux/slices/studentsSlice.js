import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchStudentsData = createAsyncThunk(
    'scientific-journals/fetchData',
    async () => {
        const response = await StoreService.getStudentsData();
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
                const payload = action.payload.societies.navElements;
                state.page = action.payload.societies.page;
                state.navElements = payload.map((item) => ({
                    id: item.id,
                    link: item.cards[0].title,
                    cards: item.cards.map((card) => ({
                        id: card.id,
                        title: card.title,
                        description: card.description,
                        deteil: card.detail,
                        images: card.images,
                        work: card.work.map((workItem) => ({
                            id: workItem.id,
                            name: workItem.name,
                            description: workItem.description,
                            img: workItem.img,
                            detail: workItem.detail
                        }))
                    }))
                }));
            })
            .addCase(fetchStudentsData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = studentsSlice.actions;
export default studentsSlice.reducer;
