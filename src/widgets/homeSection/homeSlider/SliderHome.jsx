import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Nutr from '../../../shared/images/nutr.jpg';
import Pex from '../../../shared/images/pex.jpg';
import Mer from '../../../shared/images/mer.jpg';
import Naws from '../../../shared/images/news.jpg'
import Slider from 'react-slick';
import './sliderHome.scss'

export const SliderHome = () => {

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

      const fakeData = [
        {
          image: Nutr,
        },
        {
          image: Pex,
        },
        {
          image: Mer,
        },
        {
          image: Naws,
        },
      ];
    
  return (
    <div className="container">
    <div className="slider-container">
    <div className="slider-text">
      <h2 className="op" id="title-home-slider">ГАЛЕРЕЯ</h2>
    </div>

    <Slider {...settings}>
      {fakeData.map((item, index) => (
        <div className="slide" key={index}>
          <img src={item.image} alt={`Слайд ${index + 1}`} className="slide-image" />
        </div>
      ))}
    </Slider>
  </div>
  </div>
  ) 
}
