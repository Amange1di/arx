import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchGuideData = createAsyncThunk(
    'aboutacademy/fetchData',
    async () => {
        const response = await StoreService.getAboutacademyData();
        return response;
    }
);

const initialState = {
    page: 'Об Академии',
    navElements: [
        {
            "link": "О нас",
            "twoLink": [
                {
                    "link": "Стратегия Развития"
                },
                {
                    "link": "Миссия"
                },
                {
                    "link": "История"
                }
            ]
        },
        {
            "link": "Руководство"
        },
        {
            "link": "Документы",
            "twoLink": [
                {
                    "link": "Лицензия"
                },
                {
                    "link": "Акретация"
                }
            ]
        },
        {
            "link": "Научные Журнал"
        }
    ],
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
            .addCase(fetchGuideData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = guideSlice.actions;
export default guideSlice.reducer;
