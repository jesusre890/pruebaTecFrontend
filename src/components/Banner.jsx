import {Carousel} from "@material-tailwind/react";
import img1 from '../assets/headerCelu.png'
import img2 from '../assets/headerImagen2.png'
import img3 from '../assets/headerImage.jpg'

const Banner=() => {
  const carouselHeight = 500; 

  return (
    <div style={{ height: carouselHeight + "px", position: "relative" }}>
      <Carousel
        loop={true}
        autoPlay={true}
        className="rounded-xl"
        style={{ height: "100%" }}
      >
        <div style={{ height: "100%", position: "relative" }}>
          <img
            className="h-full w-full object-cover object-center block md:hidden lg:hidden"
            src={img2}
            alt="imagen 1"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </div>
        <div style={{ height: "100%", position: "relative" }}>
          <img
            src={img1}
            className="h-full w-full object-cover object-center block md:hidden lg:hidden"
            alt="imagen 2"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </div>
      </Carousel>
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover object-center hidden md:block lg:block"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      />
    </div>
  );
}

export default Banner
