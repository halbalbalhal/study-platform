import styles from './Homescreen.module.css'
import Home from '../../components/Header/Home/Home'
import Header from '../../components/Header'



const Homescreen = () => {
    return (
        <div className= {styles.container}>
            <Home />
        </div>
    )
}

export default Homescreen