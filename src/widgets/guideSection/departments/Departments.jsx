import { useSelector } from 'react-redux';
import './departments.scss';

export const Departments = () => {
    const { selectedSub } = useSelector((state) => state.guide);
    const departmentData = useSelector(
        (state) => state.guide.navElements?.[1]?.twoLink?.[selectedSub]?.data
    );

    if (!departmentData) return null;

    return (
        <div className='department'>
            <p dangerouslySetInnerHTML={{ __html: departmentData.description }}></p>
           
            <h4> {departmentData.head }</h4>
            <h3>{departmentData.contact}</h3>
            <h5> <a href={`tel:${departmentData?.phone}`}>
                                                    {departmentData?.phone}
                                                </a></h5>
            <a href={`mailto:${departmentData.email}`}>{departmentData.email}</a>
        </div>
    );
};
