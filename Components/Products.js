import React from 'react'
import ProductCard from './ProductCard';
import { Row, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';


export default function Products() {

    
    const { t } = useTranslation("common")


    const products = [
        {
            id:0,
            name:t("udderTowel"),
            img:"/towel1.jpg",
            weight: [240,340,380],
            scale:"30x30 cm",
            waterCapacity:"300%",
            poliester:"100%",
            customScale:false,
            quality:"285gr/m2",
            colors:[t("white")],
            properties:[
                `${t("differentSurfaces")}: ${t("hardAndEasy")}`,
                `${t("waterHoldingCapacity")}: 300%`,           
                t("fastDrying"),
                t("microbialGrowth"),
                `${t("washingInstruction")}: ${t("udderWashingInstructions")}`,
                `${t("dryingInstruction")}: ${t("udderDryingInstructions")}`,
                `100% ${t("poliester")}`,
                t("udderGoal")
            ]

        },
        {
            id:1,
            name:t("faceHandTowel"),
            img:"/towel1.jpg",
            weight: [340,380],
            scale:"40x50 cm",
            waterCapacity:"300%",
            poliester:"100%",
            customScale:true,
            quality:"330gr/m2",
            colors:[t("white")],
            properties:[
                `${t("differentSurfaces")}: ${t("softAndSofter")}`,
                `${t("waterHoldingCapacity")}: 300%`,           
                t("fastDrying"),
                t("microbialGrowth"),
                `${t("washingInstruction")}: ${t("udderWashingInstructions")}`,
                `${t("dryingInstruction")}: ${t("udderDryingInstructions")}`,
                `100% ${t("poliester")}`,
                t("faceHandGoal")
            ]

        },
        {
            id:2,
            name:t("bathrope"),
            img:"/towel1.jpg",
            weight: [340,380],
            scale:`${t("differentScales")}`,
            waterCapacity:"300%",
            poliester:"100%",
            customScale:true,
            quality:"330gr/m2",
            colors:[t("white")],
            properties:[
                `${t("differentSurfaces")}: ${t("softAndSofter")}`,
                `${t("waterHoldingCapacity")}: 300%`,           
                t("fastDrying"),
                t("microbialGrowth"),
                `${t("washingInstruction")}: ${t("udderWashingInstructions")}`,
                `${t("dryingInstruction")}: ${t("udderDryingInstructions")}`,
                `100% ${t("poliester")}`,
                t("bathropeGoal")
            ]

        },
        {
            id:3,
            name:t("cleaningCloth"),
            img:"/towel1.jpg",
            weight: [340,380],
            scale:`${t("differentScales")}`,
            waterCapacity:"300%",
            poliester:"100%",
            customScale:true,
            quality:"330gr/m2",
            colors:[t("white")],
            properties:[
                `${t("differentSurfaces")}: ${t("hardAndEasy")}`,
                `${t("waterHoldingCapacity")}: 300%`,           
                t("fastDrying"),
                t("nonMarking"),
                t("microbialGrowth"),
                `${t("washingInstruction")}: ${t("udderWashingInstructions")}`,
                `${t("dryingInstruction")}: ${t("udderDryingInstructions")}`,
                `100% ${t("poliester")}`,
                t("clothGoal")
            ]

        },
        {
            id:3,
            name:t("bathAndBeach"),
            img:"/towel1.jpg",
            weight: [340,380],
            scale:`${t("differentScales")}`,
            waterCapacity:"300%",
            poliester:"100%",
            customScale:true,
            quality:"330gr/m2",
            colors:[t("white")],
            properties:[
                `${t("differentSurfaces")}: ${t("softAndSofter")}`,
                `${t("waterHoldingCapacity")}: 300%`,           
                t("fastDrying"),
                t("nonMarking"),
                t("microbialGrowth"),
                `${t("washingInstruction")}: ${t("udderWashingInstructions")}`,
                `${t("dryingInstruction")}: ${t("udderDryingInstructions")}`,
                `100% ${t("poliester")}`,
                t("clothGoal")
            ]

        },
    ]

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

