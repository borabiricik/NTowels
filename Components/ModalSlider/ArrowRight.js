import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "../styles/modalSlider.module.scss"

const ArrowRight = (props) => {
    const {onClick,className} = props;

    return (
        <button className={[styles.rightArrow]} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    )
}

export default ArrowRight
