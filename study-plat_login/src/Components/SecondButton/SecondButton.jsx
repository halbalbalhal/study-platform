import './SecondButton.css'

function SecondButton(props) {
    return(
        <button className='column__loginGoogleBtn'><img src={props.img} alt='' className='loginGoogleImg'/>{props.title}</button>
    )
}

export default SecondButton