import styles from './Login.module.css'
import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import Text from "../../components/Signup&Login/Text/Text";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ButtonWithImage from "../../components/Signup&Login/ButtonWithImage/ButtonWithImage";
import { login } from "../../firebase/authService";
import { useState } from "react";
import Preloader from "../../components/Preloader/Preloader";

const Login = () => {
    const [valueOfEmailInput, setValueOfEmailInput] = useState('')
    const [valueOfPasswordInput, setValueOfPasswordInput] = useState('')

    const inputValue = (value, name) => {
        if(name === 'email'){
            setValueOfEmailInput(value)
            document.querySelector('.' + styles.errorEmail).style.display = 'none'
        }
        else if(name === 'password'){
            setValueOfPasswordInput(value)
            document.querySelector('.' + styles.errorPassword).style.display = 'none'
        }
    }

    const loginButton = () => {
        document.getElementById('preloader').style.display = 'flex'
        document.querySelector('.' + styles.container).style.opacity = 0.6
        login(valueOfEmailInput, valueOfPasswordInput,(uid) => {
            if(uid === 'auth/invalid-email' || uid === 'auth/user-not-found'){
                document.getElementById('preloader').style.display = 'none'
                document.querySelector('.' + styles.container).style.opacity = 1
                document.querySelector('.' + styles.errorEmail).style.display = 'flex'
            }
            else if(uid === 'auth/wrong-password'){
                document.getElementById('preloader').style.display = 'none'
                document.querySelector('.' + styles.container).style.opacity = 1
                document.querySelector('.' + styles.errorPassword).style.display = 'flex'
            }
            else {
                window.location.href = '/homescreen'
            }
        })
    }

    return(
        <div className={styles.container}>
            <PictureWithText text='Login to your personal account' />
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <Text title='Login' />
                    <Input title='E-mail' type='text' name='email' isValid='true' isLogin='true' onChange={inputValue} />
                    <span className={`${styles.column__error} ${styles.errorEmail}`}>Wrong e-mail</span>
                    <Input title='Password' type='password' name='password' isValid='true' isLogin='true' onChange={inputValue} />
                    <span className={`${styles.column__error} ${styles.errorPassword}`}>Wrong password</span>
                    <Button title='Login' tapEvent={loginButton} isDisabled={valueOfEmailInput === '' || valueOfPasswordInput === ''} />
                    <ButtonWithImage title='Login with Google' />
                </div>
            </div>
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
            <Preloader />
        </div>
    )
}

export default Login