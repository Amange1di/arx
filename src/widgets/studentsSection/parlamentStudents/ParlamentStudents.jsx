import React from 'react'
import  diralan  from "../../../shared/images/diralan.png";
import  yusuf from "../../../shared/images/diralan.png";
import "./parlamentStudents.scss"
export const ParlamentStudents = () => {
    const dataActiv = [
        {
            id: 1,
            img: diralan,
            name: "Байзакова Диралан Бакаевна",
            description: "Председатель Студенческого парламента",
            description2: "Руководство деятельностью парламента",
        },
        {
            id: 2,
            img: yusuf,
            name: "Якубов  Юсуф  Алимович",
            description: "Заместитель председателя ",
            description2: "Организация культурных мероприятий",
        },
        {
            id: 1,
            img: diralan,
            name: "Байзакова Диралан Бакаевна",
            description: "Председатель Студенческого парламента",
            description2: "Руководство деятельностью парламента",
        },

    ];

    return (
        <div className='Conteiner'>
            {dataActiv.map((item, index) => {
                return (
                    <div className="block" key={index}>
                        <div className="minBlock">
                            <img className='img' src={item.img} alt="" />
                            <div className="text">
                                <h1>{item.name}</h1>
                                <div className="line"></div>
                                <p>{item.description}</p>
                                <p>{item.description2}</p>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

