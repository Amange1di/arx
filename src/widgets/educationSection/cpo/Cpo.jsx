import React from "react";
import { useSelector } from 'react-redux';
import "./cpo.scss";

export const Cpo = () => {
    const { navElements, selected, selectedSub } = useSelector(state => state.education);
    const currentSection = navElements[selected];
    const currentSubSection = selectedSub !== null ? currentSection?.twoLink[selectedSub] : null;

    const displayedData = [
       {
        id:1,
        specialty:"Исламский правовед",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:2,
        specialty:"Юрист",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:3,
        specialty:"Специалист ",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:4,
        specialty:"Судья в исламских судах",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:5,
        specialty:"Консультант по правовым ",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:6,
        specialty:"Исламский правовед",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:7,
        specialty:"Юрист",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:8,
        specialty:"Специалист ",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:9,
        specialty:"Судья в исламских судах",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:10,
        specialty:"Консультант по правовым ",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:11,
        specialty:"Исламский правовед",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
       {
        id:12,
        specialty:"Исламский правовед",
        status:"Высшее образование",
        form:"Утренное",
        period:"11 база 3 года 10 мес."
       },
    ];

    return (
        <div className="container">
            <div className="content">
                <h1 className="textTOne">{currentSection?.link}</h1>
                {currentSubSection && (
                    <h2 className="subTitle">{currentSubSection.link}</h2>
                )}
                <p className="textT">
                    Высшее профессиональное образование — это ваш первый шаг к успешной карьере и глубоким знаниям в выбранной области. Наша академия предлагает программы, которые сочетают теоретические основы и практические навыки, готовя студентов к профессиональной деятельности и дальнейшему обучению.
                </p>
                <h2 className="textTOnet">Факультеты и Программы</h2>
                {["textTkuu", "textTfuu", "textTluu", "textTpuu"].map((className, index) => (
                    <div key={index}>
                        <p className="textBrit">Факультет исламского права (фикх)</p>
                        <p className={className}>
                            Факультет предоставляет знания в области исламского права, правовых систем и судебных практик в странах с исламской традицией. Студенты изучают основы исламского права, семейное право в исламе, а также гражданское и уголовное право в исламском контексте. По завершении программы выпускники получают квалификацию правоведа или юриста в исламских странах.
                        </p>
                    </div>
                ))}
                <h2 className="textix">Факультет исламского права (фикх)</h2>
                <p className="dinna">Специальность</p>
                <table className="tabletin">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Название
                            Специальности</th>
                            <th>Статус</th>
                            <th>Форма обучение</th>
                            <th>Период обучение</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((item, index) => (
                            <tr key={index}>
                                <td></td>
                                <td>{item.specialty}</td>
                                <td>{item.status}</td>
                                <td>{item.form}</td>
                                <td>{item.period}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


