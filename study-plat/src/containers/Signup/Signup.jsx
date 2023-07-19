import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import styles from './Signup.module.css'
import Text from '../../components/Signup&Login/Text/Text'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Preloader from '../../components/Preloader/Preloader'
import Dd from '../../components/DdMessage/Dd'
import { createAccount } from '../../firebase/authService'
import { auth, createUser } from '../../firebase/userService'
import { useForm } from 'react-hook-form'
import { updateProfile } from "firebase/auth"



const Signup = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (formData) => {
        // ЭТО НЕ РАБОТАЕТ И РЕГИСТРАЦИЯ НЕ ИДЁТ


        // document.querySelector('.' + styles.error).style.display = 'none'
        // document.getElementById('preloader').style.display = 'flex'
        // document.querySelector('.' + styles.container).style.opacity = 0.6
        createAccount(
            formData['email'],
            formData['password'],
            (userCredential) => {
                if(userCredential === 'auth/email-already-in-use'){
                    console.log('email is already in use')


                } else {
                    createUser(userCredential.user.uid, formData['name'], formData['email'], (error) => {
                        updateProfile(auth.currentUser, { displayName: formData['name'] }).then(() => {
                            window.location.href = '/homescreen'
                        }).catch((error) => {
                            alert(error)
                        })
                    })
                }
            }
        )
    }

    return(
        <div className={styles.container}>
            <PictureWithText text='Create your personal account' />
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.column}>
                    <Text title='Signup' />
                    <Input name='name' register={register} title='Name' type='text' isValid={!errors['name']} isRegister='true' />
                    <Input name='email' register={register} title='E-mail' type='text' isValid={!errors['email']} isRegister='true' />
                    <span className={styles.error}>Email already in use</span>
                    <Input name='password' register={register} title='Password' type='password' isValid={!errors['password']} isRegister='true' />
                    {/*<Input name='password_repeat' register={register} watch={watch} title='Repeat password' type='password' isValid={!errors['password_repeat']} isRegister='true' />*/}
                    <Button title='Signup' />
                    <Dd title="This email is already in use" />
                </div>
            </form>
            <Link link='/login' text='Do you have an account? ' textLink='Log in' />
            <Preloader />
        </div>
    )
}

export default Signup