import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export default function ProductModal(props) {
const {t} = useTranslation("common")

    return (
        <div onClick={e=>e.stopPropagation()}>
            <Modal {...props} show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.product.img} layout="responsive"  width="100%" height="100" objectFit="contain" />
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