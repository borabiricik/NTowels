import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import Image from 'next/image';
import styles from "../Components/Layout/styles/card.module.scss"
import ProductModal from './ProductModal';
import useTranslation from 'next-translate/useTranslation';

export default function ProductCard({ product }) {
    const [show, setShow] = useState(false);

    const handleShowModal = () => setShow(true);
    const handleCloseModal = () => setShow(false);

    const {t} = useTranslation("common")

    return (
        <div className="spacer p-3 col-6 col-md-3">
            <Card className={styles.card} onClick={handleShowModal}>
                <Image src={product.img} className="card-img" layout="responsive" width="100%" height={150} objectFit="cover" objectPosition="center" />
                <Card.Body>
                    <p className="font-bold text-normal w-100 mb-1">{product.name}</p>
                    <div>
                        <small>{t("scaleOption")} </small>
                        {product.customScale ? <small className="text-success font-bold">{t("available")}</small> : <small className="text-danger">{t("unavailable")}</small>}
                    </div>
                    <small className="font-bold">{t("weight")}: </small>
                    {
                        product.weight.map(weight => (
                            <small key={weight} className="d-block">{weight} gr/m²</small>
                        ))
                    }
                </Card.Body>

                <ProductModal product={product} show={show} onHide={handleCloseModal} />

            </Card>
        </div>
    )
}
