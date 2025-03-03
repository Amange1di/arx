import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './aboutCarousel.scss'

export const  AboutCarousel = ({ items }) => {

    const settings = {
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container">
            <div className="slider-container">
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div className="slide" key={index}>
                            <img src={item.image} alt={`Слайд ${index + 1}`} className="slide-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
