import React from 'react'
import styles from "../Components/Layout/styles/mapmarker.module.scss"

export default function MapMarker() {
    return (
        <>
            <div className={`${styles.pin} ${styles.bounce}`}></div>
            <div className={`${styles.pulse}`}></div>
        </>
    )
}
