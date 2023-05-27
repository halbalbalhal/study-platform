import Wrapper from '../Wrapper/Wrapper'
import PictureWithText from '../../../components/Signup&Login/PictureWithText/PictureWithText'
import Link from '../../../components/Signup&Login/Link/Link'
import styles from './Page.module.css'

const Page = () => {
    return(
        <div className={styles.container}>
            <PictureWithText text='Create your personal account' />
            <Wrapper />
            <Link link='/login' text='Do you have an account? ' textLink='Log in' />
        </div>
    )
}

export default Page