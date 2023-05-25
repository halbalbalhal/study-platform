import Header from '../../components/Header'
import styles from './Homescreen.module.css'
import Home from '../../components/Header/Home/Home'

const Homescreen = () => {
    return (
        <div className= {styles.container}>
            <Header />
            <Home />
        </div>
    )
}

export default Homescreen