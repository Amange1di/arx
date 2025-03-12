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
    page: "Деятельность",
    banner: {
        "title": "Наследие Успеха Наши Достижения",
        "description": "Исламская Академия гордится тем, что предоставляет своим студентам уникальные возможности для роста и развития. Мы стремимся не только к передаче знаний, но и к формированию личностей, готовых внести вклад в общество."
    },
    navElements: [
        {
            "id": 1,
            "link": "Воспитательная",
            "cards": [
                {
                    "id": 1,
                    "image": "https://i.pinimg.com/736x/76/37/9b/76379b35ae218370c87448a9e1387d8a.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город  ОШ, Кыргызстан"
                },
                {
                    "id": 2,
                    "image": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Жалал абад, Кыргызстан"
                },
                {
                    "id": 3,
                    "image": "https://static.vecteezy.com/system/resources/previews/000/174/259/large_2x/free-certificate-template-vector.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Баткен, Кыргызстан"
                },
                {
                    "id": 4,
                    "image": "https://i.pinimg.com/736x/e7/f3/93/e7f39391839eb31d36cf1be0085e6d75.jpg",
                    "date": "Учреждена в 2021 году",
                    "title": "Премия короля Абдаллы II за исламские исследования",
                    "description": "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество",
                    "location": "Место: город Нарын, Кыргызстан"
                }
            ]
        },

        {
            "id": 2,
            "link": "Просветительская",
            "cards": [
                {
                    "id": 2,
                    "image": "https://test.qaztest.kz/img/cert.jpg",
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
