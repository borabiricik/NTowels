import React from 'react'
import PageSlider from './../../Components/PageSlider';
import LandingProducts from './../../Components/LandingProducts';
import DescriptionSection from './../../Components/DescriptionSection';
import Certificates from './../../Components/Certificates';


export default function LandingIndex() {

    return (
        <>
            <PageSlider />
            <DescriptionSection />            
            <LandingProducts />
            <Certificates />

        </>
    )
}
