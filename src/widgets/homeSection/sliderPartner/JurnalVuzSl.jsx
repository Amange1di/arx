import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import './sliderPartner.scss'
import { JurnalVuz } from "./JurnalVuz";

export const JurnalVuzSl = () => {
    const settings = {
        centerMode: false, 
        arrows: false,
        infinite: true, 
        slidesToShow: 6, 
        slidesToScroll: 1,
        speed: 500, 
        autoplay: false,
        cssEase: "linear", 
        touchThreshold: 100, 
        swipeToSlide: true,      
        variableWidth: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const JurnalCards = [1, 2, 3, 4, 5, 6]

    return (
        <div className="container">
        <div className='slider-container-jurnal-vuz'>
            <h1 className='op' id='title-sl'>журналы <br />партнерских вузов</h1>
            <Slider {...settings}>
            {JurnalCards.map((_, index) => (
                    <JurnalVuz key={index} />
                ))}
            </Slider>
        </div>
        </div>
    )
}



