import Wrapper from '../Wrapper/Wrapper'
import PictureWithText from '../../../components/PictureWithText/PictureWithText'
import Link from '../../../components/Link/Link'
import styles from './App.module.css'

function App () {
    return(
        <div className={styles.container}>
            <PictureWithText text='Login to your personal account' />
            <Wrapper />
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
        </div>
    )
}

export default App