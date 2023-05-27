import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../components/Signup&Login/Link/Link'
import styles from './Login.module.css'
import Text from "../../components/Signup&Login/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonWithImage from "../../components/Signup&Login/ButtonWithImage";
import {useForm} from "react-hook-form";
import {createAccount} from "../../firebase/authService";

const Login = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (formData) => {
        console.log(createAccount(
            formData['email'],
            formData['password'],
            (userCredential) => {}
        ))
    }

    return(
        <div className={styles.container}>
            <PictureWithText text='Login to your personal account' />
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.column}>
                    <Text title='Login' />
                    <Input name='email' register={register} title='E-mail' type='text' isValid={!errors['email']} />
                    <Input name='password' register={register} title='Password' type='password' isValid={!errors['password']} />
                    <Button title='Login' />
                    <ButtonWithImage title='Login with Google' />
                </div>
            </form>
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
        </div>
    )
}

export default Login