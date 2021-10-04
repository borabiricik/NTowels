import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/modalSlider.module.scss"
import React from 'react'

const ArrowLeft = (props) => {
    const { onClick } = props;
    return (
        <button className={styles.leftArrow} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    )
}

export default ArrowLeft
