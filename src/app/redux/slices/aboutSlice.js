import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: 'about',
    
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

export const { setCurrentLeader } = aboutSlice.actions;
export default aboutSlice.reducer;
