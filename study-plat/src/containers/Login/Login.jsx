import styles from './Login.module.css'

import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import Text from "../../components/Signup&Login/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonWithImage from "../../components/Signup&Login/ButtonWithImage";
const Login = () => {
    return(
        <div className={styles.container}>
            <PictureWithText text='Login to your personal account' />
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <Text title='Login' />
                    <Input title='E-mail' type='text' isValid='false' />
                    <Input title='Password' type='password' name='password' isValid='false' />
                    <Button title='Login' />
                    <ButtonWithImage title='Login with Google' />
                </div>
            </div>
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
        </div>
    )
}

export default Login