import { useState } from 'react'
import styles from './OnboardSlider.module.css'

import blackCircle from '../../assets/icons/Onboard/blackCircle.png'
import whiteCircle from '../../assets/icons/Onboard/whiteCircle.png'

const OnboardSlider = ({ data }) => {
    const [currentSlideData, setCurrentSlideData] = useState(data[0])
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    return(
        <section className={styles.onboard__slide}>
            <img src={currentSlideData.image} alt="Page didn't find" />
            <span className={styles.onboard__title}>{currentSlideData.title}</span>
            <p className={styles.onboard__text}>{currentSlideData.text}</p>

            <div className={styles.onboard__circles}>
                {data.map((element) => {
                    return (
                        <button onClick={() => setCurrentSlideData(data[currentSlideIndex])}>
                            <img src={currentSlideData.title === element.title ? blackCircle : whiteCircle} alt="Page didn't find"/>
                        </button>
                    )
                })}
            </div>

            <button className={styles.onboard__button} onClick={() => {
                if (currentSlideIndex === 2) {
                    setCurrentSlideData(data[0])
                    setCurrentSlideIndex(0)                       
                } else {
                    setCurrentSlideData(data[currentSlideIndex + 1])
                    setCurrentSlideIndex(currentSlideIndex + 1)     
                }
                }}>Continue</button>
        </section>
    )
}



export default OnboardSlider