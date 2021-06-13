import React from 'react'
import styles from "../Components/Layout/styles/description.module.scss"
import  useTranslation  from 'next-translate/useTranslation';

export default function DescriptionSection() {

    const {t} =useTranslation("common")


    return (
        <div className={"my-5 pt-5"}>
            <div className="cardSection row justify-content-center no-gutters align-items-center">
                <div className={`${styles.leftCard} col-6 col-sm-3 d-flex align-items-center justify-content-center`}>
                    <h2 className="font-black text-big text-white text-center">{t("descriptionHeader")}</h2>
                </div>

                <div className={`${styles.rightCard} col-7 col-sm-3 d-flex align-items-center justify-content-center`}>
                    <p className="ml-5 pl-4 font-semibold text-white">{t("description")}</p>
                </div>
            </div>
        </div>
    )
}
