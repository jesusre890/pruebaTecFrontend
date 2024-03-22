import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import a1 from "../../assets/f1.jpg";
import a2 from "../../assets/f2.jpg";
import a3 from "../../assets/f3.jpg";
import a4 from "../../assets/f4.jpg";
import a5 from "../../assets/f5.jpg";
import a7 from "../../assets/f7.jpg";
import a8 from "../../assets/f6.jpg";

const CarrouselFinan = () => {
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
          <img src={a7} alt="aliado" />
        </div>
        <div>
          <img src={a8} alt="aliado" />
        </div>
      </Slider>
    </div>
  );
};

export default CarrouselFinan