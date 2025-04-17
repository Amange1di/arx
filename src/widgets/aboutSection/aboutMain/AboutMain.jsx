import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import { AboutDocument } from "../aboutDocument/AboutDocument";
import './aboutMain.scss';

export const AboutMain = ({ items }) => {
    console.log(items);

    const getIcon = (type) => {
        switch (type) {
            case 'phone':
                return <FaPhone className="about-navigate__item-icon" />;
            case 'location':
                return <FaLocationDot className="about-navigate__item-icon" />;
            case 'hours':
                return <FaClock className="about-navigate__item-icon" />;
            default:
                return <FaLocationDot className="about-navigate__item-icon" />;
        }
    };

    const parseAddresses = (addresses) => {
        if (!addresses) return { phone: '', location: '', hours: '' };
        const parser = new DOMParser();
        const doc = parser.parseFromString(addresses, 'text/html');
        const paragraphs = Array.from(doc.querySelectorAll('p')).filter(p => p.innerHTML.trim() !== ' ');
        
        return {
            phone: paragraphs[0]?.innerHTML || 'Телефон не указан',
            location: paragraphs[1]?.innerHTML || 'Адрес не указан',
            hours: paragraphs[2]?.innerHTML || 'Часы работы не указаны'
        };
    };

    const documentItems = items && (items.url_pdf || items.dowl_url)
        ? [{
            id: items.page_key || 'doc1', 
            title: items.title_pdf || 'Документ академии',
            link_open: items.url_pdf || '#',
            link_download: items.dowl_url || '#'
        }]
        : [];

    const addressData = items ? parseAddresses(items.addresses) : {};

    return (
        <main>
            <section className="about-texts">
                <div className="about-texts__content">
                    {items ? (
                        <article className="about-texts__item">
                            <h3
                                className="about-texts__item-title"
                                dangerouslySetInnerHTML={{ __html: items.title_main || 'Об академии' }}
                            ></h3>
                            <p
                                className="about-texts__item-description"
                                dangerouslySetInnerHTML={{ __html: items.description || 'Описание отсутствует' }}
                            ></p>
                            {items.images && items.images.length > 0 && (
                                <section className="info-carousel">
                                    <h2 className="info-carousel-title">
                                        {items.title_page || "Изображения академии"}
                                    </h2>
                                    <div className="info-carousel__wrapper">
                                        <Swiper
                                            modules={[Autoplay, Pagination]}
                                            loop={true}
                                            centeredSlides={true}
                                            slidesPerView={3}
                                            spaceBetween={13}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                clickable: true,
                                                el: ".info-carousel__pagination",
                                            }}
                                            className="info-carousel__swiper"
                                        >
                                            {items.images.map((item, index) => (
                                                <SwiperSlide key={index} className="info-carousel__slide">
                                                    <img
                                                        src={item.image}
                                                        alt={`Слайд ${index + 1}`}
                                                        className="info-carousel__image"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div className="info-carousel__pagination"></div>
                                    </div>
                                </section>
                            )}
                        </article>
                    ) : (
                        <p>Данные отсутствуют</p>
                    )}
                </div>
            </section>

            <section className="about-navigate">
                <div className="about-navigate__content">
                    <article className="about-navigate__info">
                        {items && (
                            <div className="about-navigate__item">
                                <div className="about-navigate__item-details">
                                    {getIcon('phone')}
                                    <div>
                                        <h3 
                                        className="about-navigate__item-title"
                                        >Телефон номер</h3>
                                        <p
                                            className="about-navigate__item-description"
                                            dangerouslySetInnerHTML={{ __html: addressData.phone }}
                                        ></p>
                                    </div>
                                </div>
                                <div className="about-navigate__item-details">
                                    {getIcon('location')}
                                    <div>
                                        <h3 className="about-navigate__item-title">Адрес</h3>
                                        <p
                                            className="about-navigate__item-description"
                                            dangerouslySetInnerHTML={{ __html: addressData.location }}
                                        ></p>
                                    </div>
                                </div>
                                <div className="about-navigate__item-details">
                                    {getIcon('hours')}
                                    <div>
                                        <h3 className="about-navigate__item-title">Часы работы</h3>
                                        <p
                                            className="about-navigate__item-description"
                                            dangerouslySetInnerHTML={{ __html: addressData.hours }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>

                    <aside className="about-navigate__map">
                        {items && items.links_carta ? (
                            <iframe
                                src={items.links_carta}
                                allowFullScreen=""
                                loading="lazy"
                                style={{
                                    border: 0,
                                    height: '100%',
                                    width: '100%',
                                }}
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        ) : (
                            <p>Карта отсутствует</p>
                        )}
                    </aside>
                </div>
            </section>
            {documentItems.length > 0 && (
                <AboutDocument items={documentItems} />
            )}
        </main>
    );
};

AboutMain.propTypes = {
    items: PropTypes.shape({
        page_key: PropTypes.string,
        title_main: PropTypes.string,
        title2: PropTypes.string,
        title_page: PropTypes.string,
        description: PropTypes.string,
        addresses: PropTypes.string,
        links_carta: PropTypes.string,
        title_pdf: PropTypes.string,
        url_pdf: PropTypes.string,
        dowl_url: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string
            })
        ),
    }),
};

AboutMain.defaultProps = {
    items: null,
};