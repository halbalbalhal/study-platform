// Код крайне костыльный
//(т.к. не знаю как это реализовывать по-другому)

// import for using render in order to render screens
import { render } from '@testing-library/react'
import './onboard.css'

const Onboard = () => {

    // Function for appearing second block
    function Click1() {
        document.getElementById("first_slide").style.display = "none"
        render (
            <section className='slide' id='second_slide'>
                <img src={require("../../assets/images/Onboard/Board2.png")} alt="sdasdasasddas" />
                <span className='title'>Learn your passion, level up your skill</span>
                <p className='text'>make yourself expert your skill by studying from mentors</p>

                <div className='circles'>
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                </div>

                <button className='button' onClick={Click2}>Continue</button>
            </section>
        )
    }

    // Function for appearing third block
    function Click2() {
        document.getElementById("second_slide").style.display = "none"
        render (
            <section className='slide'>
                <img src={require("../../assets/images/Onboard/Board3.png")} alt="sdasdasasddas" />
                <span className='title'>Get your graduate with extraordinary skills</span>
                <p className='text'>get your certificate after finished your online course</p>

                <div className='circles'>
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                    <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                </div>

                <button className='button'>Continue</button>
            </section>
        )
    }


    // Rendering first block
    return(
        <section className='slide' id='first_slide'>
            <img src={require("../../assets/images/Onboard/Board1.png")} alt="sdasdasasddas" />
            <span className='title'>Start your journey with fun learning videos</span>
            <p className='text'>explore various learning videos based on your passion</p>

            <div className='circles'>
                <img src={require("../../assets/icons/Onboard/blackCircle.png")} alt="sdasdasasddas" />
                <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
                <img src={require("../../assets/icons/Onboard/whiteCircle.png")} alt="sdasdasasddas" />
            </div>

            <button className='button' onClick={Click1}>Continue</button>
        </section>
    )

}

export default Onboard