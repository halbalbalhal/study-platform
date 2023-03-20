import Text from '../../Components/Text/Text'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import './Wraper.css'

function Wraper () {
    return(
        <div className='wraper'>
            <div className='login__column'>
                <Text title='Signup' />
                <Input title='Name' type='text'/>
                <Input title='E-mail' type='text'/>
                <Input title='Password' type='password'/>
                <Button title='Signup' />
            </div>
        </div>
    )
}

export default Wraper