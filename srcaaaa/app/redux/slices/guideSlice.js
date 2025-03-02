import { createSlice } from '@reduxjs/toolkit';

const guideSlice = createSlice({
    name: 'guide',
    initialState: {
        currentLeader: null,
        isLoading: false,
        error: null
    },
    reducers: {
        setCurrentLeader: (state, action) => {
            state.currentLeader = action.payload;
        }
    }
});

export const { setCurrentLeader } = guideSlice.actions;
export default guideSlice.reducer;
