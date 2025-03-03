import  diralan  from "../../../shared/images/diralan.png";
import { useSelector } from 'react-redux';
import "./parlamentStudents.scss";

export const ParlamentStudents = () => {
    const members = useSelector(state =>
        state.students.navElements?.find(el => el.id === 1)?.data
    ) || [];

    return (
        <div className='Conteiner'>
            {members.map((item, index) => (
                <div className="block" key={index}>
                    <div className="minBlock">
                        <img className='img' src={diralan} alt={item.name} />
                        <div className="text">
                            <h1>{item.name}</h1>
                            <div className="line"></div>
                            <p>{item.description}</p>
                            <p>{item.description2}</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};



