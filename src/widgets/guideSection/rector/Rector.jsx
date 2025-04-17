import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import './rector.scss';

export const Rector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedSub } = useSelector((state) => state.guide);
    const rectorData = useSelector(
        (state) => {
            return state.guide.navElements?.[0]?.twoLink?.[selectedSub]?.data;
        }
    );
    
    return (
        <section className="rector">
            <div className="container">
                <div className="rector_content">
                    <div className="rector_content_img">
                        <img
                            src={rectorData?.image}
                            alt={rectorData?.name || 'Ректор'}
                        />
                        <div className="rector_content_img_text">
                            <h3>{rectorData?.name}</h3>
                            <h3>{rectorData?.title}</h3>
                            <h4>{rectorData?.title}</h4>
                        </div>
                    </div>

                    <div
                        className="rector_content_info"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {!isOpen && rectorData?.description && (
                            <>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: rectorData.description.slice(0, 262) + (rectorData.description.length > 150 ? '' : '')
                                    }}
                                ></p>
                            </>
                        )}

                        <AnimatePresence initial={false}>
                            {isOpen && rectorData && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="rector_content_info_expanded"
                                >
                                    <p dangerouslySetInnerHTML={{ __html: rectorData.description }}></p>

                                    <h4>{rectorData.contact}</h4>
                                    <div className="rector_content_info_contacts">
                                        <div>
                                            <p className="email">
                                                <a href={`mailto:${rectorData?.email}`}>
                                                    {rectorData?.email}
                                                </a>
                                            </p>
                                            <p className="tel">
                                                <a href={`tel:${rectorData?.phone}`}>
                                                    {rectorData?.phone}
                                                </a>
                                            </p>
                                        </div>
                                        <a href={rectorData.link} className='rector_content_info_contacts_btn'>Открыть PDF</a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="rector_content_info_footer">
                            <p>{rectorData.date_publication}</p>
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
