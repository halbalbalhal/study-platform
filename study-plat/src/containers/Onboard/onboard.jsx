// стартовая страница сайта (Onboarding page)
// Решил рендерить отдельно объекты при нажатии на кнопку и передавать предыдущему блоку display: none;
// 26.03.2023
import { render } from '@testing-library/react'
import './onboard.css'

const Onboard = () => {
    // Рендер первого блока
    return(
        <section className='onboard_slide' id='first_slide'>
            <img src={require("../../assets/images/Onboard/Board1.png")} alt="sdasdasasddas" />
            <span className='onboard_title'>Start your journey with fun learning videos</span>
            <p className='onboard_text'>explore various learning videos based on your passion</p>

            <div className='onboard_circles'>
                <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
            </div>

            <button className='onboard_button' onClick={Click1}>Continue</button>
        </section>
    )
    
    
    // Функция для рендера 2-го экрана
    function Click1() {
        document.getElementById("first_slide").style.display = "none"
        render (
            <section className='onboard_slide' id='second_slide'>
                <img src={require("../../assets/images/Onboard/Board2.png")} alt="sdasdasasddas" />
                <span className='onboard_title'>Learn your passion, level up your skill</span>
                <p className='onboard_text'>make yourself expert your skill by studying from mentors</p>

                <div className='onboard_circles'>
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                </div>

                <button className='onboard_button' onClick={Click2}>Continue</button>
            </section>
        )
    }

    // Функция для рендера 3-го экрана
    function Click2() {
        document.getElementById("second_slide").style.display = "none"
        render (
            <section className='onboard_slide'>
                <img src={require("../../assets/images/Onboard/Board3.png")} alt="sdasdasasddas" />
                <span className='onboard_title'>Get your graduate with extraordinary skills</span>
                <p className='onboard_text'>get your certificate after finished your online course</p>

                <div className='onboard_circles'>
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                </div>

                <button className='onboard_button'>Continue</button>
            </section>
        )
    }

}

export default Onboard