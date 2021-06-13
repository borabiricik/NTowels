import React from 'react'
import Slider from 'react-slick';
import Image from "next/image"
import "../Components/Layout/styles/carousel.module.scss"

export default function PageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,

    };
    return (
        <Slider className={`p-0 m-0`} {...settings}>
            <div>
                <Image src="/slide1.jpg" layout="responsive" width="90%" height="33%" objectFit="cover" objectPosition="top" />
            </div>
            <div>
                <Image src="/slide2.jpg" layout="responsive" width="90%" height="33%" objectFit="cover" objectPosition="top" />
            </div>

        </Slider>
    )
}
