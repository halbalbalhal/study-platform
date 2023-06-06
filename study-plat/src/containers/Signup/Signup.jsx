import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import styles from './Signup.module.css'
import Text from '../../components/Signup&Login/Text/Text'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { createAccount } from '../../firebase/authService'
import { createUser } from '../../firebase/userService'
import { useForm } from 'react-hook-form'
import Preloader from "../../components/Preloader/Preloader";

const Signup = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (formData) => {
        document.getElementById('preloader').style.display = 'flex'
        document.querySelector('.' + styles.container).style.opacity = 0.6
        createAccount(
            formData['email'],
            formData['password'],
            (userCredential) => {
                window.location.href = '/homescreen'
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
                    <Input name='password' register={register} title='Password' type='password' isValid={!errors['password']} isRegister='true' />
                    {/*<Input name='password_repeat' register={register} watch={watch} title='Repeat password' type='password' isValid={!errors['password_repeat']} isRegister='true' />*/}
                    <Button title='Signup' />
                </div>
            </form>
            <Link link='/login' text='Do you have an account? ' textLink='Log in' />
            <Preloader />
        </div>
    )
}

export default Signup