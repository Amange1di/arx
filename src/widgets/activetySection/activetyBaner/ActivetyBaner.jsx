import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityBanner } from '../../../app/redux/slices/activityBannerSlice';
import "./activetyBaner.scss";

export const ActivetyBaner = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector(state => state.activityBanner);

    useEffect(() => {
        dispatch(getActivityBanner());
    }, [dispatch]);

    return (
        <div className='activetyBaner'>
            <h1>{banner?.title}</h1>
            <div>
                <p>{banner?.description}</p>
            </div>
        </div>
    );
};
