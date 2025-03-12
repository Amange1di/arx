import React from 'react';
import './cpo.scss';

export const MainContent = ({ data }) => {
    if (!data) return null;

    return (
        <div className="cpo">
            {data.title && (
                <div className="section-block">
                    <h2>{data.title}</h2>
                </div>
            )}

            {data.title_h2 && (
                <div className="faculty-block">
                    <h3>{data.title_h2}</h3>
                </div>
            )}

            {data.description && (
                <div className="description-block">
                    <p className="textT">{data.description}</p>
                </div>
            )}
        </div>
    );
};
