import Text from '../Components/Text/Text'
import Input from '../Components/Input/Input'
import Button from '../Components/Button/Button'
import SecondButton from '../Components/SecondButton/SecondButton'
import google_icon from '../Pictures/Google.svg'
import './Wraper.css'

function Wraper () {
    return(
        <div className='wraper'>
            <div className='login__column'>
                <Text title='Login' />
                <Input title='E-mail' type='text'/>
                <Input title='Password' type='password'/>
                <Button title='Login' />
                <SecondButton title='Login with Google' img={google_icon} />
            </div>
        </div>
    )
}

export default Wraper