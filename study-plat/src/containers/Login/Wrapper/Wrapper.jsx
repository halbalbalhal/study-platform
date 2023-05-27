import Text from '../../../components/Signup&Login/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import ButtonWithImage from '../../../components/Signup&Login/ButtonWithImage/ButtonWithImage'
import styles from './Wrapper.module.css'
import PasswordInput from "../../../components/Signup&Login/PasswordInput/PasswordInput";

const Wrapper = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <Text title='Login' />
                <Input title='E-mail' type='text' />
                <PasswordInput title='Password' />
                <Button title='Login' />
                <ButtonWithImage title='Login with Google' />
            </div>
        </div>
    )
}

export default Wrapper