import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "./aboutCarousel.scss";

export const AboutCarousel = ({ items }) => {
    
    return (
        <section className="info-carousel">

            <h2></h2>
            <div className="info-carousel__wrapper">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={40}
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
                    {items.map((item, index) => (
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
    );
};      

AboutCarousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            link_open: PropTypes.string.isRequired,
            link_download: PropTypes.string.isRequired,
        })
    ).isRequired,
};