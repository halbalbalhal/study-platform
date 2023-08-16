import React, { useRef } from 'react'
import styles from './FeedbackForm.module.css'
import emailjs from '@emailjs/browser'
import Button from '../Button/Button'
import { SERVICE_ID, TEMPLATE_ID,  PUBLIC_KEY } from '../../utils/emailjsUtil'
import Dd from '../DdMessage/Dd'

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
                <span className={styles.feedback__text}>Want to leave a feedback?</span>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.user__forms}>
                        <textarea placeholder='your name' type="text" name="user_name" />
                        <textarea placeholder='your email' type="email" name="user_email" />
                    </div>
                    <textarea  placeholder='your message' name="message" className={styles.form__message} />
                    <div className={styles.form__button} style={{width: "300px", marginLeft: "100px"}} >
                        <Button type='submit' title='Send' tapEvent={() => {
                            document.getElementById("dropdown").style.display = 'flex'
                        }} />
                    </div>
                </form>
            </div>
            <Dd title='Email sent successfully' />
        </div>
    )
}

export default FeedbackForm