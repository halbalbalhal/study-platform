import styles from './Wrapper.module.css'

import Text from '../../../components/Signup&Login/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import PasswordInput from "../../../components/Signup&Login/PasswordInput";

const Wrapper = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <Text title='Signup' />
                <Input title='Name' type='text' />
                <Input title='E-mail' type='text' />
                <PasswordInput title='Password' />
                <PasswordInput title='Repeat password' />
                <Button title='Signup' />
            </div>
        </div>
    )
}

export default Wrapper