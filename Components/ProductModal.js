import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Slider from 'react-slick';
import ArrowRight from './ModalSlider/ArrowRight';
import ArrowLeft from './ModalSlider/ArrowLeft';
import styles from "./styles/modalSlider.module.scss"



export default function ProductModal(props) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />

    }
    const { t } = useTranslation("common")
    const { product } = props;
    return (
        <div onClick={e => e.stopPropagation()}>
            <Modal {...props} show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Slider {...settings} className={[styles.modalSlider]}>
                        {
                            product.images.map(img => (
                                <div key={img}>
                                    <Image src={img} layout="responsive" width="100%" height="100" objectFit="contain" className={styles.sliderImage}/>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="p-4 text-small">
                        <p className="font-bold my-1">{t("scale")}: {props.product.scale}</p>
                        <p className="font-bold my-1">{t("color")}: {product.colors.map(color => (color))}</p>
                        <p className="font-bold my-1 mb-4">{t("quality")}: {product.quality}</p>


                        <ul key={props.product.id}>
                            {
                                props.product.properties.map(property => (
                                    <li key={props.product.id} className="my-1">{property}</li>
                                ))
                            }
                        </ul>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <a className="btn btn-dark-outline" onClick={props.onHide}>
                        {t("close")}
                    </a>
                </Modal.Footer>
            </Modal>
        </div>
    );
}