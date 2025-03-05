import Iko from "../../../shared/images/homeImages/homeiko.png";
import Whiteiko from "../../../shared/images/homeImages/whiteiko.png";
import './stepeni.scss'

const academicDegrees = [
    { text: "Среднее профессиональное образование", icon: Iko },
    { text: "Высшее профессиональное образование", icon: Iko },
    { text: "Магистратура", icon: Iko },
    { text: "Докторантура", icon: Iko },
];

const additionalCourses = [
    { text: "Курсы повышения квалификации", icon: Whiteiko, bgColor: "rgba(0, 95, 75, 1)" },
    { text: "Курсы переподготовки", icon: Whiteiko, bgColor: "rgba(0, 95, 75, 1)" },
    { text: "Курсы по определенной направлении", icon: Whiteiko, bgColor: "rgba(26, 66, 119, 1)" },
    { text: "Индивидуальные курсы", icon: Whiteiko, bgColor: "rgba(26, 66, 119, 1)" },
];

export const Education = () => {
    return (
        <div className="container">
            <div className="stepen-container">
                <div className="head-stepen">
                    <h2 className="op" id="title-stepen">Научные степени</h2>
                    <div className="stepen">
                        {academicDegrees.map((item, index) => (
                            <div key={index} className="circle" style={{ backgroundColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)" }}>
                                <img src={item.icon} alt="" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="head-dop">
                    <div className="dop-title">
                        <h3 className="op" id="title-dop">
                            <span>Дополнительное</span>
                            <span>профессиональное образование</span>
                        </h3>
                        <h4 className="op" id="kursy">Курсы</h4>
                    </div>
                    <div className="dop-info">
                        {additionalCourses.map((item, index) => (
                            <div key={index} className="circled" style={{ backgroundColor: item.bgColor }}>
                                <img src={item.icon} alt="" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
