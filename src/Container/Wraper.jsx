import LoginText from '../Components/LoginText'
import Input from '../Components/Input'
import Button from '../Components/Button'
import SecondButton from '../Components/SecondButton'
import './Wraper.css'

function Wraper () {
    return(
        <div className='wraper'>
            <div className='login__column'>
                <LoginText />
                <Input name='E-mail' type='text'/>
                <Input name='Password' type='password'/>
                <Button name='Login' />
                <SecondButton />
            </div>
        </div>
    )
}

export default Wraper