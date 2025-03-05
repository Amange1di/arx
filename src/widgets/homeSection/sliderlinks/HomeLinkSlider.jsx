import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import './sliderLinks.scss'
import LinkSliderLinks from "./LinkSliderLinks"
export const HomeLinkSlider = () => {
    const settings = {
        centerMode: true,
        arrows: false,
        infinite: true,
        slidesToShow: 6, 
        slidesToScroll: 1,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: "linear",
        pauseOnHover: true,
        draggable: true, 
        swipeToSlide: true,
        touchThreshold: 100,
        fade: false, 
        rtl: false,
      };
      
    
      const JurnalCards = [1, 2, 3, 4, 5, 6]

    return (
        <div className="container">
        <div className='slider-container-links'>

            <Slider {...settings}>
            {JurnalCards.map((_, index) => (
                    <LinkSliderLinks key={index} />
                ))}
            </Slider>
        </div>
        </div>
    )
}
