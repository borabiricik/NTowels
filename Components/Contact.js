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

                <div className="col-12 col-md-7 mx-auto">
                    <p>
                        <IoMapOutline />
                        <small className="pl-3 text-secondary w-100">Adalet Mah. Manas Blv. Folkart Towels No:47 B iç Kapi No:2601 Bayraklı/Izmir/Turkey</small>
                    </p>

                    <p>
                        <IoMailOutline />
                        <small className="pl-3 text-secondary">volkanh@ntowels.com</small>
                    </p>

                    <p>
                        <IoCallOutline />
                        <small className="pl-3 text-secondary">+90 533 427 94 64</small>
                    </p>
                </div>


            </Row>
        </Container>
    )
}
