import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import './vacancies.scss';

export const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const vacanciesList = useSelector((state) => {
        const jobElement = state.guide.navElements?.find((element) => element.link === 'Job');
        return jobElement?.data || [];
    });

    if (!vacanciesList || vacanciesList.length === 0) {
        return <p>Вакансий нет</p>;
    }

    return (
        <div className="vacancies">
            <div className="container">
                {vacanciesList.map((vacancy, index) => (
                    <div
                        className="vacancies_content_info"
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <h3 dangerouslySetInnerHTML={{ __html: vacancy?.description || 'Описание отсутствует' }}></h3>
                        <h4>Обязанности:</h4>

                        {openIndex !== index && (
                            <ul className="vacancies_content_info_list">
                                {vacancy.responsibilities?.split('<br />').slice(0, 2).map((duty, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: duty }} />
                                ))}
                            </ul>
                        )}

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="vacancies_content_info_expanded"
                                >
                                    <ul className="vacancies_content_info_list">
                                        {vacancy.responsibilities && (
                                            <li
                                                key={index}
                                                dangerouslySetInnerHTML={{ __html: vacancy.responsibilities }}
                                            />
                                        )}
                                    </ul>

                                    <h4>{vacancy.contact}</h4>
                                    <div className="vacancies_content_info_contacts">
                                        <p className="email">
                                            <a href={`mailto:${vacancy.email}`}>{vacancy.email}</a>
                                        </p>
                                        <p className="tel">
                                            <a href={`tel:${vacancy.phone}`}>{vacancy.phone}</a>
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="vacancies_content_info_footer">
                            <p>{vacancy.date_publication}</p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenIndex(openIndex === index ? null : index);
                                }}
                            >
                                {openIndex === index ? 'Свернуть' : 'Раскрыть'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};