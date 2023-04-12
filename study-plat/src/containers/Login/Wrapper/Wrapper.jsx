import Text from '../../../components/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import ButtonWithImage from '../../../components/ButtonWithImage/ButtonWithImage'
import google_icon from '../../../assets/icons/google.svg'
import styles from './Wrapper.module.css'

const Wrapper = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <Text title='Login' />
                <Input title='E-mail' type='text'/>
                <Input title='Password' type='password'/>
                <Button title='Login' />
                <ButtonWithImage title='Login with Google' img={google_icon} />
            </div>
        </div>
    )
}

export default Wrapper