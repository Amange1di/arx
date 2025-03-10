import React from 'react'
import "./studentsHostel.scss"
// import Swiper from "../swiper/Swiper";

export const StudentsHostel = () => {
    const dataActiv = [
        {
            id: 1,
            name2: "СТУДЕНЧЕСКОЕ ОБЩЕЖИТИЕ",
            description: "Студенческое общежитие Исламской академии – это комфортное и безопасное пространство, созданное для удобного проживания, учёбы и духовного развития студентов. Мы обеспечиваем все условия для того, чтобы каждый студент чувствовал себя как дома, находясь в окружении единомышленников и соблюдая традиции исламского образа жизни."
        },
        {
            id: 2,
            name: "УСЛОВИЯ ПРОЖИВАНИЯ",
            conditions: [
                "Уютные комнаты на 2–4 человека",
                "Современные учебные зоны и библиотека",
                "Комнаты для отдыха и братских встреч",
                "Просторная столовая с халяльным питанием",
                "Бесперебойный Wi-Fi для учебных нужд",
                "Соблюдение исламских норм и традиций"
            ]
        },
        {
            id: 3,
            name: "ДУХОВНАЯ АТМОСФЕРА",
            conditions: [
                "Совместные молитвы и джамаат-намазы",
                "Духовные наставления и уроки богословов",
                "Чтение и изучение Корана",
                "Соблюдение этикета братства и взаимопомощи"
            ]
        },
        {
            id: 4,
            name: "БЕЗОПАСНОСТЬ И ПОРЯДОК",
            conditions: [
                "Круглосуточная охрана и видеонаблюдение",
                "Чёткий распорядок дня и внутренний устав",
                "Отдельные общежития для братьев и сестёр",
                "Регулярная уборка и санитарный контроль"
            ]
        },
        {
            id: 5,
            name: "СТУДЕНЧЕСКИЙ БЫТ",
            conditions: [
                "Спортивные площадки и зоны для прогулок",
                "Учебные классы для самостоятельной работы",
                "Халяльное питание 3 раза в день",
                "Удобные прачечные зоны"
            ]
        },
        {
            id: 6,
            name: "ОТЗЫВЫ СТУДЕНТОВ",
            description: "«Общежитие Академии – это место, где учёба сочетается с духовной жизнью, братством и поддержкой. Здесь мы не просто живём, а растём во всех смыслах!»",
            description2: "«Уют, порядок, дисциплина – это то, что делает нашу жизнь здесь комфортной и продуктивной!»"
        }
    ];

    return (
        <div className="studentsHostel">
            {dataActiv.map((item) => (
                <div className="conditions" key={item.id}>
                    {/* {item.name2 && <h1>{item.name2}</h1>} */}
                    {item.name && <h3>{item.name}</h3>}
                    {item.description && <p>{item.description}</p>}
                    {item.description2 && <p>{item.description2}</p>}
                    {item.conditions && (
                        <ul className="li">
                            {item.conditions.map((condition, index) => (
                                <li  key={index}>{condition}</li>
                            ))}
                        </ul>
                    )}
                    {/* {item.id !== 1 && <Swiper />} */}
                </div>
            ))}
        </div>
    );
};

