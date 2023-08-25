import React, { useRef } from 'react'
import styles from './FeedbackForm.module.css'
import emailjs from '@emailjs/browser'
import Button from '../Button/Button'
import { SERVICE_ID, TEMPLATE_ID,  PUBLIC_KEY } from '../../utils/emailjsUtil'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const FeedbackForm = () => {
    const form = useRef()

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                console.log('Email sent succesfully!')
                const successNotfication = () => toast('Success')
                successNotfication()
            }, (error) => {
                console.log(error.text)
                console.log('Something went wrong and Email was not sent.')
                const failNotfication = () => toast('something went wrong')
                failNotfication()
            })

            const textarea1 = document.getElementById('feedbackform1')
            const textarea2 = document.getElementById('feedbackform2')
            const textarea3 = document.getElementById('feedbackform3')
            console.log(
                textarea1.value,
                textarea2.value,
                textarea3.value
            )
            textarea1.value = ''
            textarea2.value = ''
            textarea3.value = ''
    }

    return (
        <div className={styles.feedback}>
            <div className={styles.feedback__wrapper}>
                <span className={styles.feedback__text}>Want to leave a feedback?</span>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.user__forms}>
                        <textarea id='feedbackform1' placeholder='your name' type="text" name="user_name" />
                        <textarea id='feedbackform2' placeholder='your email' type="email" name="user_email" />
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