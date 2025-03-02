import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import './rector.scss';
// import defaultPhoto from '../../../shared/images/rector.png';

export const Rector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedSub } = useSelector((state) => state.nav);
    const rectorData = useSelector(
        (state) => state.nav.navElements?.[0]?.twoLink?.[selectedSub]?.data
    );

    return (
        <section className="rector">
            <div className="container">
                <div className="rector_content">
                    <div className="rector_content_img">
                        <img
                            src={rectorData?.image }
                            alt={rectorData?.name || 'Ректор'}
                        />
                        <div className="rector_content_img_text">
                            <h3>{rectorData?.name}</h3>
                            <h3>{rectorData?.position}</h3>
                            <h4>{rectorData?.degree}</h4>
                        </div>
                    </div>

                    <div
                        className="rector_content_info"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <h4>Научные труды ректора</h4>
                        {!isOpen && rectorData?.description && (
                            <>
                                <p>{rectorData?.description}</p>
                                <ul className="rector_content_info_list">
                                    {rectorData?.scientificWorks?.slice(0, 3).map((work, index) => (
                                        <li key={index}>{work}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <AnimatePresence initial={false}>
                            {isOpen && rectorData && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="rector_content_info_expanded"
                                >
                                    <p>{rectorData?.description}</p>

                                    <h4>Основные труды:</h4>
                                    <ul className="rector_content_info_list">
                                        {rectorData?.scientificWorks?.map((work, index) => (
                                            <li key={index}>{work}</li>
                                        ))}
                                    </ul>
                                    <h4>Выступления и публикации</h4>
                                    <p>{rectorData?.description}</p>

                                    <h4>Контакты для связи:</h4>
                                    <div className="rector_content_info_contacts">
                                        <div>
                                            <p className="email">
                                                <a href={`mailto:${rectorData?.contacts?.email}`}>
                                                    {rectorData?.contacts?.email}
                                                </a>
                                            </p>
                                            <p className="tel">
                                                <a href={`tel:${rectorData?.contacts?.phone}`}>
                                                    {rectorData?.contacts?.phone}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="rector_content_info_footer">
                            <p>12.21.2121</p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(!isOpen);
                                }}
                            >
                                {isOpen ? 'Свернуть' : 'Раскрыть'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
