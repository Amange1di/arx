import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StoreService from '../../../shared/api/service';

export const fetchStudentsData = createAsyncThunk(
    'students/fetchData',
    async () => {
        const response = await StoreService.getStudentsData();
        return response;

    }
);

const initialState = {
    page: '',
    navElements: [
        {
            "id": 1,
            "link": "Студенческий Парламент",
            "dataActiv": [
                {
                    "id": 1,
                    "img": "https://gradepowerlearning.com/wp-content/uploads/2014/06/ThinkstockPhotos-492655144-scaled.jpg",
                    "name": "Байзакова Диралан Бакаевна",
                    "description": "Председатель Студенческого парламента",
                    "description2": "Руководство деятельностью парламента"
                },
                {
                    "id": 2,
                    "img": "https://media.canvayo.com/uploads/sites/ef50b4315db14f68eed4b11a733f02de/2021/03/smiling-woman-having-a-break-at-university-2757x1840.jpg",
                    "name": "Якубов Юсуф Алимович",
                    "description": "Заместитель председателя",
                    "description2": "Организация культурных мероприятий"
                },
                {
                    "id": 3,
                    "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg",
                    "name": "Байзакова Диралан Бакаевна",
                    "description": "Председатель Студенческого парламента",
                    "description2": "Руководство деятельностью парламента"
                }
            ]
        },
        {
            "id": 2,
            "link": "Активные Студенты",
            "dataActiv": {
                "students": [
                    {
                        "name": "Социальная мобильность и молодежь",
                        "description": "'Психология группы и поведение в условиях кризиса' — статья в журнале 'Social Psychology Review', исследующая поведение групп в экстремальных ситуациях. Научный труд — это результат научной работы, который вносит вклад в развитие какой-либо области знаний. Научные труды могут быть разнообразными по формату, содержанию и направленности. Это могут быть исследования, опубликованные статьи, книги, диссертации и другие работы, в которых систематизированы новые знания, идеи или теории. Они являются основным способом передачи научных результатов в академическом сообществе."
                    },
                    {
                        "name": "Социальная мобильность и молодежь",
                        "description": "'Психология группы и поведение в условиях кризиса' — статья в журнале 'Social Psychology Review', исследующая поведение групп в экстремальных ситуациях. Научный труд — это результат научной работы, который вносит вклад в развитие какой-либо области знаний. Научные труды могут быть разнообразными по формату, содержанию и направленности. Это могут быть исследования, опубликованные статьи, книги, диссертации и другие работы, в которых систематизированы новые знания, идеи или теории. Они являются основным способом передачи научных результатов в академическом сообществе.",
                        "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg"
                    }
                ]
            }
        },
        {
            "id": 4,
            "link": "Студенческая Жизнь",
            "dataActiv": [
                {
                    "name": "СТУДЕНТЕСКАЯ ЖИЗНЬ В АКАДЕМИИ",
                    "description": "Студенческая жизнь в Исламской академии — это не только учебный процесс, но и активное участие в научных, духовных и культурных мероприятиях. Академия создаёт все условия для развития студентов, их всестороннего роста и укрепления братства на основе исламских ценностей."
                },
                {
                    "name": "ОБРАЗОВАНИЕ И НАУКА",
                    "description": "Академия предоставляет студентам доступ к глубокому изучению исламских наук, современных дисциплин и научных исследований. Здесь регулярно проходят:",
                    "conditions": [
                        "Лекции и семинары с ведущими богословами и учёными",
                        "Исследовательские проекты и научные конференции",
                        "Изучение арабского языка и углублённые курсы по фикху, тафсиру, хадисам",
                        "Дискуссионные клубы и дебаты по актуальным вопросам исламоведения"
                    ],
                    "images": [
                        { "img": "https://media.canvayo.com/uploads/sites/ef50b4315db14f68eed4b11a733f02de/2021/03/smiling-woman-having-a-break-at-university-2757x1840.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://media.canvayo.com/uploads/sites/ef50b4315db14f68eed4b11a733f02de/2021/03/smiling-woman-having-a-break-at-university-2757x1840.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://media.canvayo.com/uploads/sites/ef50b4315db14f68eed4b11a733f02de/2021/03/smiling-woman-having-a-break-at-university-2757x1840.jpg" }
                    ]
                },
                {
                    "name": "ДУХОВНОЕ РАЗВИТИЕ",
                    "description": "Особое внимание в Академии уделяется духовному воспитанию студентов:",
                    "conditions": [
                        "Совместные молитвы и коллективные чтения Корана",
                        "Ежедневные уроки по таджвиду и фикху",
                        "Участие в исламских лекциях и наставлениях известных учёных",
                        "Программы по изучению сунны и традиций Пророка (мир ему и благословение)"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "КУЛЬТУРНЫЕ И ОБЩЕСТВЕННЫЕ МЕРОПРИЯТИЯ",
                    "description": "Студенты активно участвуют в различных мероприятиях:",
                    "conditions": [
                        "Фестивали исламской культуры",
                        "Благотворительные акции и волонтёрские проекты",
                        "Конкурсы чтецов Корана и ораторского мастерства",
                        "Тематические вечера, интеллектуальные игры и экскурсии"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "СПОРТ И ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ",
                    "description": "Физическое развитие также является важной частью студенческой жизни. В Академии работают:",
                    "conditions": [
                        " Спортивные секции (футбол, борьба, лёгкая атлетика)",
                        "Турниры и спортивные соревнования",
                        "Занятия по боевым искусствам"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "ОТЗЫВЫ СТУДЕНТОВ",
                    "description": "«Академия — это место, где знания сочетаются с духовным развитием. Здесь не просто учишься, а живёшь настоящей братской жизнью!»",
                    "conditions": [
                        " «В Академии я обрёл не только знания, но и друзей, наставников, духовное руководство. Это место, которое меняет судьбу!»"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                }
            ]
        },
        {
            "id": 5,
            "link": "Студенческая Общежитие",
            "dataActiv": [
                {
                    "name": "Студенческая Общежитие",
                    "description": "Студенческое общежитие Исламской академии – это комфортное и безопасное пространство, созданное для удобного проживания, учёбы и духовного развития студентов. Мы обеспечиваем все условия для того, чтобы каждый студент чувствовал себя как дома, находясь в окружении единомышленников и соблюдая традиции исламского образа жизни."
                },
                {
                    "name": "УСЛОВИЯ ПРОЖИВАНИЯ",
                    "conditions": [
                        "Уютные комнаты на 2–4 человека",
                        "Современные учебные зоны и библиотека",
                        "Комнаты для отдыха и братских встреч",
                        "Просторная столовая с халяльным питанием",
                        "Бесперебойный Wi-Fi для учебных нужд",
                        "Соблюдение исламских норм и традиций"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "БЕЗОПАСНОСТЬ И ПОРЯДОК",
                    "conditions": [
                        "Круглосуточная охрана и видеонаблюдение",
                        "Чёткий распорядок дня и внутренний устав",
                        "Отдельные общежития для братьев и сестёр",
                        "Регулярная уборка и санитарный контроль"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "СТУДЕНЧЕСКИЙ БЫТ",
                    "conditions": [
                        " Спортивные площадки и зоны для прогулок",
                        "Учебные классы для самостоятельной работы",
                        "Халяльное питание 3 раза в день",
                        "Удобные прачечные зоны"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                },
                {
                    "name": "ОТЗЫВЫ СТУДЕНТОВ",
                    "description": "«Общежитие Академии – это место, где учёба сочетается с духовной жизнью, братством и поддержкой. Здесь мы не просто живём, а растём во всех смыслах!»",
                    "conditions": [
                        " «Уют, порядок, дисциплина – это то, что делает нашу жизнь здесь комфортной и продуктивной!»"
                    ],
                    "images": [
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" },
                        { "img": "https://www.alagoas24horas.com.br/wp-content/uploads/2018/05/NoDiadaLnguaPortuguesaconheaaspossibilidadesdocursodeLetras.jpg" }
                    ]
                }
            ]
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
                state.selected = 0;

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
