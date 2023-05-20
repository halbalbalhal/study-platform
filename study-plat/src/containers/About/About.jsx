import styles from './About.module.css'
import Header from '../../components/Header'
import AboutInfo from '../../components/AboutInfo/AboutInfo'

const About = () => {
    return (
        <div className={styles.container}>
            <Header />
            <AboutInfo />
        </div>
    ) 
}

export default About