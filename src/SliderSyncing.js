import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider1 from "./assets/Slider1.png"; // Import image correctly

function SliderSyncing() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { src: Slider1, caption: 'Caption for image one.' }, // Use the imported image directly
    { src: Slider1, caption: 'Caption for image one.' }, // Use the imported image directly    { src: 'http://placehold.it/1200x600&text=three', caption: 'Caption for image three.' },
    { src: Slider1, caption: 'Caption for image one.' }, // Use the imported image directly    { src: 'http://placehold.it/1200x600&text=five', caption: 'Caption for image five.' },
  ];

  const mainSliderRef = useRef(null);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    afterChange: (current) => setActiveSlide(current),
  };

  const thumbnailSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    focusOnSelect: true,
    asNavFor: mainSliderRef.current,
    centerMode: true,
  };

  return (
    <div className="row slider-parent-custom">
      <div className="large-7 medium-8 columns">
        <h1 className='text-center second-box-custom' ><span  style={{ fontWeight: 600 }} >Our</span> Projects</h1>

        {/* MAIN SLIDES */}
        <Slider ref={mainSliderRef} {...mainSliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <figure>
                <img src={slide.src} alt={slide.caption} />
                {/* <figcaption>
                  {slide.caption} <a href={`#${index + 1}`}>Read more</a>
                </figcaption> */}
              </figure>
            </div>
          ))}
        </Slider>

        {/* THUMBNAILS */}
        <div className="thumbnail-slider-wrapper">
        <Slider {...thumbnailSliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} onClick={() => setActiveSlide(index)}>
              <img src={slide.src} alt={`Thumbnail for ${slide.caption}`} className={activeSlide === index ? 'active' : ''} />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderSyncing;
