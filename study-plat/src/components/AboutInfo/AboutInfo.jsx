import styles from './AboutInfo.module.css'
import donutImage from '../../assets/images/About/donut-image.png'
import Button from '../../components/Button/Button'

const AboutInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>About our project</h2>

                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.
                </p>

                <div className={styles.small_container}>
                    <Button title="Go Study"/>
                </div>
                
                <img src={donutImage} className={styles.picture}/>
            </div>
        </div>
    )
}

export default AboutInfo