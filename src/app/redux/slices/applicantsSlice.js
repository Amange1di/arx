import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchApplicantsData = createAsyncThunk(
    'applicants/fetchData',
    async () => {

        const response = await StoreService.getApplicantsData();
        console.log('Applicants data:', response);
        return response;

    }
);

const initialState = {
    page: 'Абитуриентам',
    navElements: [
        {
            "id": 1,
            "link": "Поступить в Академию",
            "data": {
                "intro": "Хотите стать студентом Исламской академии? Мы приглашаем вас присоединиться к сообществу, где знания, духовное развитие и братство играют ключевую роль.",
                "requirements": {
                    "title": "Кто может поступить?",
                    "items": [
                        "Абитуриенты, окончившие среднее образование",
                        "Те, кто стремится к углублённому изучению исламских наук",
                        "Желающие овладеть арабским языком и религиозными дисциплинами"
                    ]
                },
                "admissionSteps": {
                    "title": "Этапы поступления",
                    "documents": {
                        "title": "Подготовка документов",
                        "items": [
                            "Паспорт",
                            "Аттестат о среднем образовании",
                            "Свидетельство о религиозном образовании (если имеется)"
                        ]
                    },
                    "exams": {
                        "title": "Вступительные испытания",
                        "items": [
                            "Собеседование с приёмной комиссией",
                            "Проверка знаний арабского языка",
                            "Тестирование по основам ислама"
                        ]
                    },
                    "enrollment": {
                        "title": "Зачисление и начало учёбы",
                        "dates": "11 март  2025 ",
                        "educationForms": [
                            "Очная Дистанционная"
                        ]
                    }
                },
                "contacts": {
                    "phone": "+7 (XXX) XXX-XX-XX",
                    "email": "admission@academy.com",
                    "schedule": "Пн-Пт: 9:00-18:00"
                }
            }
        },
        {
            "id": 2,
            "link": "Приёмная Комиссия",
            "data": {
                "description": "Приёмная комиссия Исламской академии сопровождает абитуриентов на всех этапах поступления, помогая с оформлением документов и подготовкой к вступительным испытаниям.",
                "services": {
                    "title": "Мы помогаем",
                    "items": [
                        "Разъяснить правила поступления",
                        "Проверить комплект документов",
                        "Организовать вступительные экзамены",
                        "Дать консультации по учебному процессу"
                    ]
                },
                "location": {
                    "address": "г.Бишкек-ул. А.Юнусова 134",
                    "workingHours": "Пн-Сб: 9:00-20:00",
                    "contacts": {
                        "phone": "+7 (XXX) XXX-XX-XX",
                        "email": "admission@academy.com"
                    }
                }
            }
        }
    ],
    selected: null,
    loading: false,
    error: null
};

const applicantsSlice = createSlice({
    name: 'applicants',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplicantsData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApplicantsData.fulfilled, (state, action) => {
                state.loading = false;
                state.page = action.payload.page;
                state.navElements = action.payload.navElements;
                state.selected = 0;
            })
            .addCase(fetchApplicantsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setSelected } = applicantsSlice.actions;
export default applicantsSlice.reducer;
