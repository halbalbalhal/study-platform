import './onboard.css'


const Onboard = () => {
    return(
        <section className='slide'>
            <img src={require("../../assets/images/Board1.png")} alt="sdasdasasddas" />
            <span className='title'>Start your journey with fun learning videos</span>
            <p className='text'>explore various learning videos based on your passion</p>

            <div className='circles'>
                <img src={require("../../assets/images/blackCircle.png")} />
                <img src={require("../../assets/images/whiteCircle.png")} />
                <img src={require("../../assets/images/whiteCircle.png")} />
            </div>

            <button className='button'>Continue</button>
        </section>
    )
}

export default Onboard