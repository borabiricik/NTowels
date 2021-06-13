import React, { useEffect } from 'react'
import { products } from '../api/products'
import ProductCard from './ProductCard';
import { Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import useTranslation  from 'next-translate/useTranslation';

export default function LandingProducts() {

    const {t} = useTranslation("common")

    return (
        <div className="my-5">
            <h1 className="text-center py-5">{t("products")}</h1>

            <Container>
                <Row className="no-gutters">
                    {
                        products.slice(0, 4).map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </Row>
                <div className="row justify-content-center">
                    <Link href="/products">
                        <a className="btn btn-sm btn-outline-dark">{t("viewAll")}</a>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

