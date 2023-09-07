import styles from './Cources.module.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'

import {data} from '../../data/CourcesData'
import { useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/userService"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Cources = () => {

    const [value, setValue] = useState('')
    const [userName, setUserName] = useState()
    const [render, setRender] = useState(0)

    if(!render){
        onAuthStateChanged(auth, (user) => {
            setUserName(user.displayName)
            setRender(1)
        })
    }


    const filteredData = data.filter(cource => {
        return cource.cource_name.toLowerCase().includes(value.toLowerCase()) 
    })


    return (
        <>
        <Header />
        <section className={styles.cources}>
            <input className={styles.course__input} onChange={(event) => setValue(event.target.value)} placeholder={"Looking for something?"} />
            <div className={styles.cources__wrapper}>
                {
                    filteredData.map((cource) =>(
                        <div className={styles.cource__block}>
                            <img src={cource.cource_logo} />
                            <span>{cource.cource_name}</span>
                            <div className={styles.coruce__button}>
                                <Button tapEvent={() => {
                                    if (!userName) {
                                        toast('you must be logged in to watch the content')
                                    } else {
                                        window.location.href = cource.link
                                    }
                                }} title={cource.cource_button} />
                            </div>
                        </div>
                    ))
                }
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
        </section>
        </>
    )
}

export default Cources