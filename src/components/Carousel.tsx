import * as React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import photo0 from '../../public/images/photo0.png'
import photo1 from '../../public/images/photo1.png'
import photo2 from '../../public/images/photo2.png'
import { useBodyStyles } from '../styles/styles';


export default function MyCarousel(props) {
    const classes = useBodyStyles(props.theme)

    const [activeItemIndex, setActioveItemIndex] = useState<number>(0);
    const [children, setChildren] = useState<any[]>([]);

    const changeActiveItem = (activeItemIndex: number) => setActioveItemIndex(activeItemIndex)
    const settings = {
        // dots: true,
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