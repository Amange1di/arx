import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchGuideData = createAsyncThunk(
    'leadership/fetchData',
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

                state.navElements = Object.keys(action.payload).flatMap(type =>
                    action.payload[type]?.map(item => ({
                        ...item,
                        data: item
                    })) || []
                ).reduce((acc, { type, title, data }) => {
                    if (type === 'Job') {
                        const jobGroup = acc.find(g => g.link === 'Job');
                        if (jobGroup) {
                            jobGroup.data.push(data);
                        } else {
                            acc.push({ link: 'Job', data: [data] });
                        }
                    } else {
                        const group = acc.find(g => g.link === type);
                        group
                            ? group.twoLink.push({ link: title, data })
                            : acc.push({ link: type, twoLink: title ? [{ link: title, data }] : [] });
                    }
                    return acc;
                }, []);

                const firstWithSubmenu = state.navElements.findIndex(item => item.twoLink.length);
                state.selected = firstWithSubmenu >= 0 ? firstWithSubmenu : 0;
                state.selectedSub = firstWithSubmenu >= 0 ? 0 : null;
            })
            .addCase(fetchGuideData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = guideSlice.actions;
export default guideSlice.reducer;