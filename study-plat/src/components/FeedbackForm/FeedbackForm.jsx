import React, { useRef } from 'react'
import styles from './FeedbackForm.module.css'
import emailjs from '@emailjs/browser'
import Button from '../Button/Button'
import { SERVICE_ID, TEMPLATE_ID,  PUBLIC_KEY} from '../../utils/emailjsUtil'

const FeedbackForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

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
                <span>Wanna leave a feedback?</span>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <div style={{width: "300px"}} >
                        <Button type='submit' title='Send' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedbackForm