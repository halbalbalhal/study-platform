import './PictureWithText.css'
import cookie from '../Pictures/Cookie.svg'

function PictureWithText(props) {
    return(
        <div className='login__container'>
            <img src={cookie} alt='' />
            <span className='container__suggestion'>{props.text}</span>
        </div>
    )
}

export default PictureWithText