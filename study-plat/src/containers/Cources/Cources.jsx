import styles from './Cources.module.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'

import {data} from '../../data/CourcesData'
import { useState } from 'react'

const Cources = () => {

    // for searching on the page
    const [value, setValue] = useState('')

    const filteredData = data.filter(cource => {
        return cource.cource_name.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <>
        <Header />
        <section className={styles.cources}>
            {/* <input onChange={(e) => setValue(e.target.value)} /> */}
            <div className={styles.cources__wrapper}>
                {
                    filteredData.map((cource) =>(
                        <div className={styles.cource__block}>
                            <img src={cource.cource_logo} />
                            <span>{cource.cource_name}</span>
                            <div className={styles.coruce__button}>
                                <Button title={cource.cource_button} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    )
}

export default Cources