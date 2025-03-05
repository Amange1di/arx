import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchStudentsData = createAsyncThunk(
    'students/fetchData',
    async () => {
        try {
            const response = await StoreService.getStudentsData();
            return response;
        } catch (error) {
            console.error('Error fetching students data:', error);
            throw error;
        }
    }
);

const initialState = {
    page: 'Студенты',
    navElements: [
        {
            "id": 1,
            "link": "Студенческий Парламент",
            "data": [
                {
                    "id": 1,
                    "img": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "name": "Байзакова Диралан Бакаевна",
                    "description": "Председатель Студенческого парламента",
                    "description2": "Руководство деятельностью парламента"
                },
                {
                    "id": 2,
                    "img": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "name": "Якубов Юсуф Алимович",
                    "description": "Заместитель председателя",
                    "description2": "Организация культурных мероприятий"
                },
                {
                    "id": 3,
                    "img": "https://i.pinimg.com/originals/32/e3/25/32e325891a0dbd2740e7c995c474b6d6.jpg",
                    "name": "Байзакова Диралан Бакаевна",
                    "description": "Председатель Студенческого парламента",
                    "description2": "Руководство деятельностью парламента"
                }
            ]
        },
        {
            "id": 2,
            "link": "Активные Студенты",
            "data": {
                "title": "Наши Активисты",
                "students": [
                    {
                        "name": "Мирлан Асанов",
                        "achievements": [
                            "Победитель олимпиады по исламскому праву 2023",
                            "Организатор благотворительных акций"
                        ],
                        "image": "https://example.com/photo3.jpg"
                    },
                    {
                        "name": "Нурайым Бакирова",
                        "achievements": [
                            "Лучший студент 2023 года",
                            "Руководитель волонтерского движения"
                        ],
                        "image": "https://example.com/photo4.jpg"
                    }
                ]
            }
        },
        {
            "id": 3,
            "link": "Студенческая Общежитие",
            "data": {
                "title": "Общежитие Академии",
                "description": "Комфортное проживание для иногородних студентов",
                "facilities": [
                    "Двухместные и трехместные комнаты",
                    "Учебные зоны",
                    "Кухни на каждом этаже",
                    "Прачечная",
                    "Зона отдыха"
                ],
                "rules": [
                    "Соблюдение режима дня",
                    "Поддержание чистоты",
                    "Уважение к соседям"
                ],
                "contacts": {
                    "address": "г. Бишкек, ул. Примерная 123",
                    "phone": "+996 XXX XXX XXX",
                    "email": "dormitory@academy.edu"
                }
            }
        },
        {
            "id": 4,
            "link": "Студенческая Жизнь",
            "data": {
                "events": [
                    {
                        "title": "Духовные встречи",
                        "description": "Еженедельные собрания для обсуждения духовных тем",
                        "schedule": "Каждую пятницу",
                        "image": "https://example.com/event1.jpg"
                    },
                    {
                        "title": "Спортивные соревнования",
                        "description": "Межфакультетские спортивные мероприятия",
                        "schedule": "Ежемесячно",
                        "image": "https://example.com/event2.jpg"
                    }
                ],
                "clubs": [
                    {
                        "name": "Клуб чтецов Корана",
                        "schedule": "Вторник и Четверг",
                        "leader": "Усман Кадыров"
                    },
                    {
                        "name": "Спортивный клуб",
                        "schedule": "Понедельник и Среда",
                        "leader": "Алмаз Жумабеков"
                    }
                ]
            }
        },
        {
            "id": 5,
            "link": "Порталы"
        }
    ],
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
                state.page = action.payload.page;
                state.navElements = action.payload.navElements;

                // Находим первый элемент с подменю
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
            .addCase(fetchStudentsData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = studentsSlice.actions;
export default studentsSlice.reducer;
