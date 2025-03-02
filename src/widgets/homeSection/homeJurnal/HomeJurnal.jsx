import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import "./homeJurnal.scss";
import { HomeJurnalComp } from "./HomeJurnalComp";
export const HomeJurnal = () => {
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
        <div className='slider-container-jurnal'>
            <h1 className='op' id='title-sl'>журнал исламской академии</h1>
            <Slider {...settings}>
            {JurnalCards.map((_, index) => (
                    <HomeJurnalComp key={index} />
                ))}
            </Slider>
        </div>
        </div>
    )
}


