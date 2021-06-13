import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { IoMapOutline, IoMailOutline, IoCallOutline } from "react-icons/io5"
import useTranslation from 'next-translate/useTranslation';

export default function Contact() {
    const { t } = useTranslation("common")

    return (
        <Container className="my-5">
            <h2 className="text-center py-5">{t("contact")}</h2>
            <Row >

                <div className="col-12 col-md-6">
                    <p>
                        <IoMapOutline />
                        <small className="pl-3 text-secondary">{t("address")}</small>
                    </p>

                    <p>
                        <IoMailOutline />
                        <small className="pl-3 text-secondary">{t("mail")}</small>
                    </p>

                    <p>
                        <IoCallOutline />
                        <small className="pl-3 text-secondary">{t("phone")}</small>
                    </p>
                </div>


            </Row>
        </Container>
    )
}
