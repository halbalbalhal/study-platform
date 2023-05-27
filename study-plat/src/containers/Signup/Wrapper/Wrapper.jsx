import styles from './Wrapper.module.css'

import Text from '../../../components/Signup&Login/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import { createAccount } from '../../../firebase/authService'
import { createUser } from '../../../firebase/userService'
import { useForm } from 'react-hook-form'

const Wrapper = () => {
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
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <Text title='Signup' />
            <Input name='name' register={register} title='Name' type='text' isValid={!errors['name']}/>
            <Input name='email' register={register} title='E-mail' type='text' isValid={!errors['email']}/>
            <Input name='password' register={register} title='Password' type='password' isValid={!errors['password']}/>
            <Input name='password' register={register} title='Repeat password' type='password' isValid={!errors['password']} />
            <Button title='Signup' />
        </form>
    )
}

export default Wrapper