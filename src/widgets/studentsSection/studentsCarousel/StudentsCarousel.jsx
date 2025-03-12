import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './studentsCarousel.scss'


export const StudentsCarousel = ({ items }) => {
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
    <div className="studentsCarousel">

      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.img} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  )
}
