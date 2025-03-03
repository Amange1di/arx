import Iko from "../../../shared/images/homeiko.png";
import Whiteiko from "../../../shared/images/whiteiko.png";
import './homeStepen.scss'

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

export const HomeStepen = () => {
    return (
        <div className="container">
            <div className="stepen">
                <div className="stepen_top">
                    <h2 className="stepen_top_title">Научные степени</h2>
                    <div className="stepen_top_group">
                        {academicDegrees.map((item, index) => (
                            <div key={index} className="stepen_top_group_bloc" style={{ backgroundColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)" }}>
                                <img src={item.icon} alt="" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="stepen_bottom">
                    <div className="stepen_bottom_text">
                        <h3>
                            <span>Дополнительное</span>
                            <span>профессиональное образование</span>
                        </h3>
                        <h4 className="op" id="kursy">Курсы</h4>
                    </div>
                    <div className="stepen_bottom_group">
                        {additionalCourses.map((item, index) => (
                            <div key={index} className="stepen_bottom_group_bloc" style={{ backgroundColor: item.bgColor }}>
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

