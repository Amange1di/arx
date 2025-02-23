import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityBanner } from '../../../app/redux/slices/activityBannerSlice';
import "./awardsBaner.scss";

export const AwardsBaner = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector(state => state.activityBanner);

    useEffect(() => {
        dispatch(getActivityBanner());
    }, [dispatch]);

    return (
        <div className='awardsBaner'>
            <h1>{banner?.title}</h1>
            <div>
                <p>{banner?.description}</p>
            </div>
        </div>
    );
};
