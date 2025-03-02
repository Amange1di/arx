import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import './vacancies.scss';

export const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const vacanciesList = useSelector(state => {
        const positions = state.nav.navElements?.find(el => el.id === 3)?.data?.positions;
        return positions || [];
    });


    return (
        <div className="vacancies">
            <div className="container">
            {vacanciesList.map((vacancy, index) => (
                <div className="vacancies_content_info" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <h3>{vacancy.title}</h3>
                    <h4>Обязанности:</h4>

                    {openIndex !== index && (
                        <ul className="vacancies_content_info_list">
                            {vacancy.responsibilities?.slice(0, 2).map((duty, i) => (
                                <li key={i}>{duty}</li>
                            ))}
                        </ul>
                    )}

                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="vacancies_content_info_expanded"
                            >
                                <ul className="vacancies_content_info_list">
                                    {vacancy.responsibilities?.map((duty, i) => (
                                        <li key={i}>{duty}</li>
                                    ))}
                                </ul>

                                <h4>Требования:</h4>
                                <ul className="vacancies_content_info_list">
                                    {vacancy.requirements?.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>

                                <h4>Условия:</h4>
                                <ul className="vacancies_content_info_list">
                                    {vacancy.conditions?.map((condition, i) => (
                                        <li key={i}>{condition}</li>
                                    ))}
                                </ul>

                                <h4>Контакты для связи:</h4>
                                <div className="vacancies_content_info_contacts">
                                    <div>
                                        <p className="email">
                                            <a href={`mailto:${vacancy.contacts?.email}`}>
                                                {vacancy.contacts?.email}
                                            </a>
                                        </p>
                                        <p className="tel">
                                            <a href={`tel:${vacancy.contacts?.phone}`}>
                                                {vacancy.contacts?.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="vacancies_content_info_footer">
                        <p>02.02.2025 15:23      Бишкек</p>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setOpenIndex(openIndex === index ? null : index);
                        }}>
                            {openIndex === index ? 'Свернуть' : 'Раскрыть'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};
