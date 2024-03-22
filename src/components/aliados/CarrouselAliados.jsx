import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import a1 from '../../assets/A1.jpg'
import a2 from '../../assets/A2.jpg'
import a3 from '../../assets/A3.jpg'
import a4 from '../../assets/A4.jpg'
import a5 from '../../assets/A5.jpg'
import a6 from '../../assets/A6.jpg'
import a7 from '../../assets/A7.jpg'
import a8 from '../../assets/A8.jpg'

const CarrouselAliados=() => {

  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };



  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={a1} alt="aliado" />
        </div>
        <div>
          <img src={a2} alt="aliado" />
        </div>
        <div>
          <img src={a3} alt="aliado" />
        </div>
        <div>
          <img src={a4} alt="aliado" />
        </div>
        <div>
          <img src={a5} alt="aliado" />
        </div>
        <div>
          <img src={a6} alt="aliado" />
        </div>
        <div>
          <img src={a7} alt="aliado" />
        </div>
        <div>
          <img src={a8} alt="aliado" />
        </div>
      </Slider>
    </div>
  );
};

export default CarrouselAliados;
