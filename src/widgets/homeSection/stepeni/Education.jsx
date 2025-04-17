import Iko from "../../../shared/images/homeImages/homeiko.png";
import Whiteiko from "../../../shared/images/homeImages/whiteiko.png";
import FonFull from '../../../shared/images/homeImages/fon-full.png';
import './stepeni.scss';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBannerData } from '../../../app/redux/slices/homeSlice';
import { fetchEducationData } from '../../../app/redux/slices/educationSlice';
import { useEffect, useState } from "react";

const educationItems = [
    { icon: Iko, bgColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)", type: "academic", indexOffset: 0 },
    { icon: Iko, bgColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)", type: "academic", indexOffset: 0 },
    { icon: Iko, bgColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)", type: "academic", indexOffset: 0 },
    { icon: Iko, bgColor: "rgba(241, 255, 212, 1)", color: "rgba(0, 95, 75, 1)", type: "academic", indexOffset: 0 },
    { icon: Whiteiko, bgColor: "rgba(0, 95, 75, 1)", type: "additional", indexOffset: 4 },
    { icon: Whiteiko, bgColor: "rgba(0, 95, 75, 1)", type: "additional", indexOffset: 4 },
    { icon: Whiteiko, bgColor: "rgba(26, 66, 119, 1)", type: "additional", indexOffset: 4 },
    { icon: Whiteiko, bgColor: "rgba(26, 66, 119, 1)", type: "additional", indexOffset: 4 },
];

export const Education = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { banner } = useSelector((state) => state.home);
    const { education, navElements } = useSelector((state) => state.education);

    const [selected, setSelected] = useState(null);

    const handleEducationItemClick = (index, indexOffset) => {
        const selectedIndex = index + indexOffset;
        console.log("Item clicked with index:", selectedIndex);
        setSelected(selectedIndex);
        navigate("/education", { state: { selectedIndex, navElements } });
    };

    useEffect(() => {
        dispatch(fetchBannerData());
        dispatch(fetchEducationData());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="stepen-container">
                <div className="head-stepen">
                    <h2 className="op" id="title-stepen">{banner?.[0]?.title_scientific_degrees}</h2>
                    <div className="stepen">
                        {educationItems.map((item, index) => {
                            if (item.type === "academic") {
                                return (
                                  
                                        <div className="circle" 
                                         key={index}
                                         onClick={() => handleEducationItemClick(index, item.indexOffset)}
                                         style={{ backgroundColor: item.bgColor, color: item.color, cursor: "pointer" }}>
                                            <img src={item.icon} alt="" />
                                            {education?.allEducation?.[index] && (
                                                <div className="education-card">
                                                    <p>{education.allEducation[index].title}</p>
                                                </div>
                                            )}
                                        </div>
                                );
                            }
                            return null;
                        })}
                        <img src={FonFull} alt="" className="fon__stepen" />
                    </div>
                </div>
            </div>

            <div className="head-dop">
                <div className="dop-title">
                    <h3 className="op" id="title-dop">
                        <span>{banner?.[0]?.title_additional_professional_education}</span>
                    </h3>
                    <h4 className="op" id="kursy">{banner?.[0]?.title_courses}</h4>
                </div>
                <div className="dop-info">
                {educationItems.map((item, index) => {
    if (item.type === "additional") {
        return (
            <div
                key={index}
                onClick={() => handleEducationItemClick(index - 4, item.indexOffset)}
                className={`circled ${selected === index ? 'active' : ''}`}
                style={{ backgroundColor: item.bgColor }}
            >
                <div className="circle">
                    <img src={item.icon} alt="" />
                    {education?.allEducation?.[index] && (
                        <div className="education-card">
                            <p>{education.allEducation[index].title}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return null;
})}

                </div>
            </div>
        </div>
    );
};
