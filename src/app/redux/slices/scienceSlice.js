import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchScienceData = createAsyncThunk(
    'science/fetchData',
    async () => {
        const response = await StoreService.getScienceData();
        return response;
    }
);

const initialState = {
    page: 'Наука',
    navElements: [
            {
                "link": "Ученый Совет"
            },
            {
                "link": "Научно -  центр развития образования"
            },
            {
                "link": "Научные Труды"
            },
            {
                "link": "Научные Журнал",
                "twoLink": [
                    {
                        "link": "Журнал исламской академии"
                    },
                    {
                        "link": "Журнал партнерских ВУЗов"
                    }
                ]
            }
        ],
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
            .addCase(fetchScienceData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = scienceSlice.actions;
export default scienceSlice.reducer;
