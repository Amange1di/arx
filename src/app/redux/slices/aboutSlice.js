import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchAboutData = createAsyncThunk(
    'AboutAcademy/fetchAboutPages',
    async () => {
        const response = await StoreService.getAboutData();
        console.log("Полученные данные:", response);
        return response;
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

const aboutSlice = createSlice({
    name: 'about',
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
            .addCase(fetchAboutData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAboutData.fulfilled, (state, action) => {
                state.isLoading = false;
                
                const aboutItems = Array.isArray(action.payload?.about)
                    ? action.payload.about.map((item, index) => ({
                        ...item,
                        id: index,
                        link: item.title2 || item.title_main 
                    }))
                    : [];

                const missionItems = Array.isArray(action.payload?.mission)
                    ? action.payload.mission.map((item, index) => ({
                        ...item,
                        id: aboutItems.length + index,
                        link: item.title2 || item.title_main
                    }))
                    : [];

                state.navElements = [...aboutItems, ...missionItems];
                state.page = action.payload?.about?.[0]?.page_key || 'about';
                state.selected = null;
                state.selectedSub = null;
                state.error = null;
            })
            .addCase(fetchAboutData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = aboutSlice.actions;
export default aboutSlice.reducer;