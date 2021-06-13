import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import Image from 'next/image';
import styles from "../Components/Layout/styles/card.module.scss"
import ProductModal from './ProductModal';

export default function ProductionsCard({ product }) {
    const [show, setShow] = useState(false);

    const handleShowModal = () => setShow(true);
    const handleCloseModal = () => setShow(false);

    return (
        <div className="spacer p-3 col-6 col-md-3">
            <Card className={styles.card} onClick={handleShowModal}>
                <Image src={product.img} className="card-img" layout="responsive" width="100%" height={150} objectFit="cover" objectPosition="center" />
                <Card.Body>
                    <p className="font-bold mb-1">{product.name}</p>
                </Card.Body>

                <ProductModal product={product} show={show} onHide={handleCloseModal} />

            </Card>
        </div>
    )
}
