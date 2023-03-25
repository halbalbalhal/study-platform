import Text from '../../../components/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './Wrapper.module.css'

function Wrapper () {
    return(
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <Text title='Signup' />
                <Input title='Name' type='text'/>
                <Input title='E-mail' type='text'/>
                <Input title='Password' type='password'/>
                <Button title='Signup' />
            </div>
        </div>
    )
}

export default Wrapper