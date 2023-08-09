import styles from './Login.module.css'

import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import Text from "../../components/Signup&Login/Text/Text"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import ButtonWithGoogle from "../../components/Signup&Login/ButtonWithGoogle/ButtonWithGoogle"
import ButtonWithFacebook from "../../components/Signup&Login/ButtonWithFacebook/ButtonWithFacebook"
import Dd from '../../components/DdMessage/Dd'
import { login } from "../../firebase/authService"
import { useState } from "react"
import Preloader from "../../components/Preloader/Preloader"
import { auth, createUser, GoogleProvider, FacebookProvider } from "../../firebase/userService"
import { signInWithPopup, updateProfile, FacebookAuthProvider, signInWithRedirect } from "firebase/auth"

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

                document.getElementById("dropdown").style.display = 'flex'
            }
            else if(uid === 'auth/wrong-password'){
                document.getElementById('preloader').style.display = 'none'
                document.querySelector('.' + styles.container).style.opacity = 1
                document.querySelector('.' + styles.errorPassword).style.display = 'flex'
                
                document.getElementById("dropdown").style.display = 'flex'
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
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                id = result.user.uid
                name = result.user.displayName
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

    const loginWithFacebook = () => {
        let id, name, email
        document.getElementById('preloader').style.display = 'flex'
        document.querySelector('.' + styles.container).style.opacity = 0.6
        signInWithPopup(auth, FacebookProvider)
        .then((result) => {
            id = result.user.uid
            name = result.user.displayName
            email = result.user.email
            createUser(id, name, email, (user) => {
                updateProfile(auth.currentUser, { displayName: name }).then(() => {
                    window.location.href = '/homescreen'
                }).catch((error) => {
                    alert(error)
                })
            })
            const user = result.user
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const accessToken = credential.accessToken
            
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.customData.email
            const credential = FacebookAuthProvider.credentialFromError(error)
    
            console.log(errorCode)
            console.log(errorMessage)
            console.log(credential)
            console.log(email)
        })
    }

    return(
        <div className={styles.container}>
            <Dd title="Something went wrong" />  
            <PictureWithText text='Login to your personal account' />
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <Text title='Login' />
                    <Input title='E-mail' type='text' name='email' isValid='true' isLogin='true' onChange={inputValue} />
                    <span className={`${styles.column__error} ${styles.errorEmail}`}>Wrong e-mail</span>
                    <Input title='Password' type='password' name='password' isValid='true' isLogin='true' onChange={inputValue} />
                    <span className={`${styles.column__error} ${styles.errorPassword}`}>Wrong password</span>
                    <Button title='Login' tapEvent={loginButton} isDisabled={valueOfEmailInput === '' || valueOfPasswordInput === ''} />
                    <ButtonWithGoogle title='Login with Google' tapEvent={loginWithGoogle} />
                    <ButtonWithFacebook title='Login with Facebook' tapEvent={loginWithFacebook} />
                </div>
            </div>
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
            <Preloader />
        </div>
    )
}

export default Login