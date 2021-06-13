import React from 'react'
import { products } from '../api/products'
import ProductCard from './ProductCard';
import { Row, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';


export default function Products() {
    const { t } = useTranslation("common")
    return (
        <div className="my-5">
            <h1 className="text-center py-5">{t("products")}</h1>

            <Container>
                <Row className="no-gutters">
                    {

                        products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

