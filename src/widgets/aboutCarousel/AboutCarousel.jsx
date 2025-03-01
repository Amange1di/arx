import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './aboutCarousel.scss';

export const AboutCarousel = ({ items }) => {
    const [slides, setSlides] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        afterChange: (current) => setActiveSlide(current), 
    };

    useEffect(() => {
        if (items && Array.isArray(items)) {
            setSlides(items);
        }
    }, [items]);

    const handleSlideClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <section className="about-carousel">
            <Slider {...sliderSettings}>
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className={`about-carousel__slide ${
                            activeSlide === index ? 'active-slide' : 'inactive-slide'
                        }`}
                        onClick={() => handleSlideClick(index)}
                    >
                        <a className="about-carousel__slide__link">
                            <img
                                src={item.image}
                                alt={item.title || `Слайд ${item.id}`}
                                className="about-carousel__slide__image"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

AboutCarousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            form_of_study: PropTypes.string.isRequired,
            training_period: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};