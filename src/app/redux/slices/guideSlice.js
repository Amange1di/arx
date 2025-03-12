import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchGuideData = createAsyncThunk(
    'guide/fetchData',
    async () => {
        const response = await StoreService.getGuideData();
        return response;
    }
);

const initialState = {
    page: 'Руководство',
    navElements: [
        {
            "id": 1,
            "link": "Ректора",
            "twoLink": [
                {
                    "link": "Ректорат",
                    "data": {
                        "name": "Kudbuhon Isakova",
                        "position": "Ректор Исламской Академии",
                        "degree": "Доктор Гуманитарных Наук",
                        "image": "https://avatars.mds.yandex.net/i?id=a898e5911f69718dc4eeca25fad52917a135fec1-12167578-images-thumbs&n=13",
                        "description": "Доктор Ибрагим Саидов — автор множества научных работ по исламскому богословию, фикху и образованию.",
                        "scientificWorks": [
                            "Исламское право: традиция и современность",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Роль исламского образования в современном мире"
                        ],
                        "contacts": {
                            "email": "hr@academy.com",
                            "phone": "+996 123 456 789"
                        }
                    }
                },
                {
                    "link": "Проректор по учебной части",
                    "data": {
                        "name": "Amangeldi Amangeldiev",
                        "position": "Проректор по учебной части",
                        "degree": "Кандидат педагогических наук",
                        "image": "https://avatars.mds.yandex.net/i?id=023dc52cb6fd1ab1b4ee2291aa131a88b837e541-5144307-images-thumbs&n=13",
                        "description": "Доктор Ибрагим Саидов — автор множества научных работ по исламскому богословию, фикху и образованию.",
                        "scientificWorks": [
                            "Исламское право: традиция и современность",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Роль исламского образования в современном мире"
                        ],
                        "contacts": {
                            "email": "edu@academy.com",
                            "phone": "+996 555 123 456"
                        }
                    }
                },
                {
                    "link": "Проректор по финансово ",
                    "data": {
                        "name": "Sultan Bekjanov",
                        "position": "Проректор по финансово-хозяйственной работе",
                        "degree": "Кандидат экономических наук",
                        "image": "https://avatars.mds.yandex.net/i?id=775c3812aa1b92c345825b5ee6924fa47a6c046c-5489370-images-thumbs&n=13",
                        "description": "Отвечает за финансово-хозяйственную деятельность академии",
                        "scientificWorks": [
                            "Исламское право: традиция и современность",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "«Роль исламского образования в современном мире"
                        ],
                        "contacts": {
                            "email": "finance@academy.com",
                            "phone": "+996 555 789 012"
                        }
                    }
                },
                {
                    "link": "О учебный секретарь",
                    "data": {
                        "name": "Kubanychbek Nazaraliev",
                        "position": "Учебный секретарь",
                        "degree": "Магистр педагогических наук",
                        "image": "https://avatars.mds.yandex.net/i?id=06322d139f269b7f139d4b590b625487a50e63cc-10713392-images-thumbs&n=13",
                        "description": "Доктор Ибрагим Саидов — автор множества научных работ по исламскому богословию, фикху и образованию.",
                        "scientificWorks": [
                            "Исламское право: традиция и современность",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Роль исламского образования в современном мире"
                        ],
                        "contacts": {
                            "email": "secretary@academy.com",
                            "phone": "+996 555 345 678"
                        }
                    }
                }
            ]
        },
        {
            "id": 2,
            "link": "Отделы",
            "twoLink": [
                {
                    "link": "Зав отделом отдела кадров",
                    "data": {
                        "name": "Aman",
                        "position": "Заведующий отделом кадров",
                        "description": "Доктор Ибрагим Саидов — автор множества научных работ по исламскому богословию, фикху и образованию.",
                        "scientificWorks": [
                            "Исламское право: традиция и современность",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Толкование Корана: методология и подходы",
                            "Роль исламского образования в современном мире"
                        ],
                        "contacts": {
                            "email": "hr@academy.com",
                            "phone": "+996 777 123 456"
                        }
                    }
                },
                {
                    "link": "Зав отделом финансового отдела "
                },
                {
                    "link": "Зав учебной части"
                },
                {
                    "link": "Зав отдела по внешней связи "
                }
            ]
        },
        {
            "id": 3,
            "link": "Вакансии",
            "data": {
                "title": "Открытые вакансии",
                "description": "Присоединяйтесь к нашей команде профессионалов",
                "positions": [
                    {
                        "title": "Преподаватель исламского права",
                        "requirements": [
                            "Докторская степень",
                            "Опыт преподавания от 5 лет",
                            "Знание арабского языка"
                        ],
                        "responsibilities": [
                            "Проведение лекций и семинаров",
                            "Разработка учебных материалов",
                            "Участие в научной деятельности"
                        ],
                        "conditions": [
                            "Официальное трудоустройство",
                            "Гибкий график и комфортные условия работы",
                            "Возможность профессионального роста"
                        ],
                        "contacts": {
                            "email": "hr@academy.com",
                            "phone": "+996 XXX XXX XXX"
                        }
                    },
                    {
                        "title": "Преподаватель арабского языка",
                        "requirements": [
                            "Высшее лингвистическое образование",
                            "Опыт преподавания от 3 лет",
                            "Носитель арабского языка или уровень C1"
                        ],
                        "responsibilities": [
                            "Преподавание арабского языка",
                            "Разработка учебных материалов",
                            "Проведение языковых практикумов"
                        ],
                        "conditions": [
                            "Официальное трудоустройство",
                            "Гибкий график и комфортные условия работы",
                            "Возможность профессионального роста"
                        ],
                        "contacts": {
                            "email": "arabic@academy.com",
                            "phone": "+996 XXX XXX XXX"
                        }
                    },
                    {
                        "title": "Библиотекарь",
                        "requirements": [
                            "Высшее образование",
                            "Знание арабского языка",
                            "Опыт работы с научной литературой"
                        ],
                        "responsibilities": [
                            "Управление библиотечным фондом",
                            "Каталогизация исламской литературы",
                            "Помощь студентам в поиске материалов"
                        ],
                        "conditions": [
                            "Официальное трудоустройство",
                            "Гибкий график и комфортные условия работы",
                            "Возможность профессионального роста"
                        ],
                        "contacts": {
                            "email": "library@academy.com",
                            "phone": "+996 XXX XXX XXX"
                        }
                    }
                ]
            }
        }
    ],
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
            .addCase(fetchGuideData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            });
    }
});

export const { setSelected, setSelectedSub } = guideSlice.actions;
export default guideSlice.reducer;
