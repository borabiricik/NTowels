import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export default function ProductModal(props) {
    const { t } = useTranslation("common")
    const { product } = props;
    return (
        <div onClick={e => e.stopPropagation()}>
            <Modal {...props} show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.product.img} layout="responsive" width="100%" height="100" objectFit="contain" />
                    <div className="p-4 text-small">
                        <p className="font-bold my-1">{t("scale")}: {props.product.scale}</p>
                        <p className="font-bold my-1">{t("color")}: {product.colors.map(color=>(color))}</p>
                        <p className="font-bold my-1 mb-4">{t("quality")}: {product.quality}</p>


                        <ul key={props.product.id}>
                            {
                                props.product.properties.map(property => (
                                    <li className="my-1">{property}</li>
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