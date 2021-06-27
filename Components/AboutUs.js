import React from 'react'
import { Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';


export default function AboutUs() {

    const { t } = useTranslation("common");
    return (
        <Container>
            <h3 className="text-center my-5">{t("aboutUs")}</h3>
            <p className="my-5"> {t("aboutUsText")}</p>
        </Container>
    )
}
