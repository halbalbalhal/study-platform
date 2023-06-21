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
import { auth, createUser, provider } from "../../firebase/userService";
import { signInWithPopup, updateProfile } from "firebase/auth";

const Login = () => {
    const [valueOfEmailInput, setValueOfEmailInput] = useState('')
    const [valueOfPasswordInput, setValueOfPasswordInput] = useState('')

    const inputValue = (value, name) => {
        document.getElementById('preloader').style.display = 'none'
        document.querySelector('.' + styles.container).style.opacity = 1

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

    const loginWithGoogle = () => {
        let id, name, email
        document.getElementById('preloader').style.display = 'flex'
        document.querySelector('.' + styles.container).style.opacity = 0.6
        signInWithPopup(auth, provider)
            .then((result) => {
                id = result.user.uid
                name = result.user.displayName
                name = name.substring(0, 7)
                if(name[6] === ' '){
                    name = name.substring(0, 6)
                    if(name[5] === ' '){
                        name = name.substring(0, 5)
                        if(name[4] === ' '){
                            name = name.substring(0, 4)
                        }
                    }
                }
                email = result.user.email
                createUser(id, name, email, (user) => {
                    updateProfile(auth.currentUser, { displayName: name }).then(() => {
                        window.location.href = '/homescreen'
                    }).catch((error) => {
                        alert(error)
                    })
                })
            }).catch((error) => {
                alert(error)
                document.getElementById('preloader').style.display = 'none'
                document.querySelector('.' + styles.container).style.opacity = 1
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
                    <ButtonWithImage title='Login with Google' tapEvent={loginWithGoogle} />
                </div>
            </div>
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
            <Preloader />
        </div>
    )
}

export default Login