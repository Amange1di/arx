import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchActivityData = createAsyncThunk(
    'activity/fetchData',
    async () => {
            const response = await StoreService.getActivityData();
            console.log('Деятельность данные:', response); 
            return response;
        
    }
);

const initialState = {
    page: '',
    banner: {
       title: "Наследие Успеха Наши Достижения",
            description: "Исламская Академия гордится тем, что предоставляет своим студентам уникальные возможности для роста и развития. Мы стремимся не только к передаче знаний, но и к формированию личностей, готовых внести вклад в общество."
      
    }, 
    navElements: [
        {
            "id": 1,
            "link": "Воспитательная",
            "cards": [
                {
                    "id": 1,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания фьфт"
                },
                {
                    "id": 2,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания"
                },
                {
                    "id": 3,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания"
                },
                {
                    "id": 4,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания"
                }
            ]
        },
        {
            "id": 2,
            "link": "Просветительская",
            "cards": [
                {
                    "id": 2,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания"
                }
            ]
        },
        {
            "id": 3,
            "link": "Издательская",
            "cards": [
                {
                    "id": 3,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": " 1 Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Амман, Иордания"
                }
            ]
        }
    ],
    selected: null,
    loading: false,
    error: null
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivityData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActivityData.fulfilled, (state, action) => {
                state.loading = false;
                state.page = action.payload.page;
                state.banner = action.payload.banner;
                state.navElements = action.payload.navElements;
                state.error = null;
            })
            .addCase(fetchActivityData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected } = activitySlice.actions;
export default activitySlice.reducer;
