import { useSelector } from 'react-redux';
import "./activetyBaner.scss";

export const ActivetyBaner = () => {
    const { banner } = useSelector(state => state.activity);


    return (
        <div className='activetyBaner'>
            <h1>{banner.title}</h1>
            <div>
                <p>{banner.description}</p>
            </div>
        </div>
    );
};
