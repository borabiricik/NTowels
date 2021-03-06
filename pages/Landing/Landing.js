import React from 'react'
import TopNavbar from '../../Components/Layout/TopNavbar';
import Head from 'next/head';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from '../../Components/Layout/Footer';
import ProductsContext from '../../context/ProductsContext';
import { products } from './../../api/products';


export default function Landing({ children }) {

    return (
        <>
            <Head>
                <title>NTowels</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <TopNavbar />
            
            <ProductsContext.Provider value={{products}}>
                <main>
                    {children}
                </main>
            </ProductsContext.Provider>

            <Footer />
        </>
    )
}
