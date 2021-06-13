import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Slider from 'react-slick';
import useTranslation from 'next-translate/useTranslation';

export default function Certificates() {

    const {t} = useTranslation("common")
    const myLoader = ({ src, width }) => {
        return `https://via.placeholder.com${src}`
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        cssEase: "linear",
        speed: 3000,
        pauseOnHover: true,
        arrows: false

    };

    return (
        <div className="bg-dark py-5 text-white">
            <Container>
                <h3 className="mb-5">{t("certificates")}</h3>
                <Slider className={`p-0 m-0`} {...settings}>
                    <div className="d-flex justify-content-center">
                        <Image className="mx" loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image loader={myLoader} src={"/150x150"} width="150" height="150" />
                    </div>

                </Slider>
            </Container>
        </div>
    )
}
