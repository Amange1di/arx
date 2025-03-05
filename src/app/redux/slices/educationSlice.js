import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchEducationData = createAsyncThunk(
    'education/fetchData',
    async () => {
        const response = await StoreService.getEducationData();
        console.log('Education data received:', response);
        return response;
    }
);

const initialState = {
    page: 'Образование',
  navElements: [
            {
                "id": 1,
                "link": "Среднее профессиональное образование",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 2,
                "link": "Высшее профессиональное образование",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 3,
                "link": "Магистатура",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 4,
                "link": "Докторантура",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 5,
                "link": "Дополнительная профессиональное образование",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 5,
                "link": "Курсы",
                "twoLink": [
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    },
                    {
                        "link": "?"
                    }
                ]
            },
            {
                "id": 5,
                "link": "Библиотека"
            }
        ],
    selected: 0,
    selectedSub: null,
    isLoading: false,
    isError: null
};

const educationSlice = createSlice({
    name: 'education', // Убедитесь, что это имя совпадает с ключом в store
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
            .addCase(fetchEducationData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchEducationData.fulfilled, (state, action) => {
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
            .addCase(fetchEducationData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = educationSlice.actions;
export default educationSlice.reducer;
