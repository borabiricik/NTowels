import React from 'react'
import { Row,Container } from 'react-bootstrap';
import ProductionsCard from './ProductionsCard';
import  useTranslation  from 'next-translate/useTranslation';

export default function Productions() {
    const {t}= useTranslation("common")

    const production = [
        {
            id:0,
            name:`${t("machine1")}`,
            img:"/machine1.jpg",
        },
        {
            id:1,
            name:`${t("machine2")}`,
            img:"/machine1.jpg",
        },
        {
            id:2,
            name:`${t("machine3")}`,
            img:"/machine1.jpg",
        },
    
    ]



    
    return (
        <div className="my-5">
            <h1 className="text-center py-5">{t("productions")}</h1>

            <Container>
                <Row className="no-gutters">
                    {
                        
                        production.map((item) => {
                            return (
                                <ProductionsCard key={item.id} product={item} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

