import { useRef } from 'react'
import styles from './FeedbackForm.module.css'
import emailjs from '@emailjs/browser'
import Button from '../Button/Button'
import { SERVICE_ID, TEMPLATE_ID,  PUBLIC_KEY } from '../../utils/emailjsUtil'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const FeedbackForm = () => {
    const form = useRef()

    const sendEmail = (event) => {
        event.preventDefault()

        const textarea1 = document.getElementById('feedbackform1')
        const textarea2 = document.getElementById('feedbackform2')
        const textarea3 = document.getElementById('feedbackform3')

        if ( (textarea1.value != '') && (textarea2.value != '') && (textarea3.value != '') ) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                console.log('Email sent succesfully!')
                toast('Email was successfully sent!')
            }, (error) => {
                console.log(error.text)
                console.log('Something went wrong and Email was not sent.')
                toast('something went wrong')
            })
            console.log(
                textarea1.value,
                textarea2.value,
                textarea3.value
            )
            textarea1.value = ''
            textarea2.value = ''
            textarea3.value = ''
        } else {
            toast('All fields must be filled')
        }

    }

    return (
        <div className={styles.feedback}>
            <div className={styles.feedback__wrapper}>
                <span className={styles.feedback__text}>Want to leave a feedback?</span>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.user__forms}>
                        <input className={styles.input_test} pattern='^[A-Za-zА-Яа-яЁё\s]{2,}' id='feedbackform1' placeholder='your name(not less than 2 symbols)' type="text" name="user_name" />
                        <input className={styles.input_test} id='feedbackform2' pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' placeholder='your email' type="email" name="user_email" />
                    </div>
                    <textarea id='feedbackform3' placeholder='your message' name="message" className={styles.form__message} />
                    <div className={styles.form__button} >
                        <Button type='submit' title='Send' />
                    </div>
                </form>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default FeedbackForm

