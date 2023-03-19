import './PictureWithText.css'
import cookie from '../Pictures/Cookie.svg'

function PictureWithText() {
    return(
        <div className='login__container'>
            <img src={cookie} alt='' />
            <span className='container__suggestion'>Login to your personal account</span>
        </div>
    )
}

export default PictureWithText