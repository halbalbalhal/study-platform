import React, { useRef } from 'react'
import styles from './FeedbackForm.module.css'
import emailjs from '@emailjs/browser'
import Button from '../Button/Button'
import { SERVICE_ID, TEMPLATE_ID,  PUBLIC_KEY } from '../../utils/emailjsUtil'

const FeedbackForm = () => {
    const form = useRef()

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                console.log('Email sent succesfully!')
            }, (error) => {
                console.log(error.text)
                console.log('Something went wrong and Email was not sent.')
            })
    }


    return (
        <div className={styles.feedback}>
            <div className={styles.feedback__wrapper}>
                <span>Want to leave a feedback?</span>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.user__forms}>
                        <textarea type="text" name="user_name" />
                        <textarea type="email" name="user_email" />
                    </div>
                    <textarea name="message" className={styles.form__message} />
                    <div className={styles.form__button} style={{width: "300px", marginLeft: "100px"}} >
                        <Button type='submit' title='Send' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedbackForm