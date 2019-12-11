import * as React from 'react';
import Slider from "react-slick";
import photo0 from '../images/photo0.png'
import photo1 from '../images/photo1.png'
import photo2 from '../images/photo2.png'


export default function MyCarousel() {

    const settings = {
        centerMode: true,
        focusOnSelect: true,
        slidesPerRow: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <img src={photo0} />
            <img src={photo1} />
            <img src={photo2} />
            <img src={photo0} />
            <img src={photo1} />
            <img src={photo2} />
        </Slider>
    )
}