import React from 'react'
import Landing from './Landing/Landing';
import Head from 'next/head';
import Products from './../Components/Products';
import useTranslation from 'next-translate/useTranslation';

export default function products() {
    const { t } = useTranslation("common")
    return (
        <>

            <Landing>
                <Head>
                    <title>{t("products")}</title>
                </Head>
                <Products />
            </Landing>
        </>
    )
}
