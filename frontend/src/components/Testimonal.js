import React from "react";
import Slider from "react-slick";

import ava01 from "../assets/images/ava1.jpg";
import ava02 from "../assets/images/ava-2.jpeg";
// import ava03 from "../assets/images/ava-1.jpg";

import "./slider.css";

const Testimonal = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "இவ்வாறு பாண் doorstep மூலம் விநியோகம் செய்வது புதுசாக உள்ளது"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mayooran</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "இவ்வாறு பாண் சந்தா முறைமூலமான கொடுப்பனவு செய்வது மிகவும் இலகுவாக உள்ளது.."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Aravintha raj</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "பாணுக்காகா சந்தா முறைமூலம் பாண் விற்பனை செய்வதை விட  உடனுக்குடன் கொடுப்பனவு மேற்க்கொள்வது சிறந்தது."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Piran</h6>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonal;