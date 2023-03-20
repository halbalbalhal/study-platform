import Wrapper from '../Wraper/Wraper'
import PictureWithText from '../../Components/PictureWithText/PictureWithText'
import Link from '../../Components/Link/Link'
import './App.css'

function App () {
    return(
        <div className='login'>
            <PictureWithText text='Create your personal account' />
            <Wrapper />
            <Link link='https://ru.reactjs.org/' text='Do you have an account?' textLink=' Log in' />
        </div>
    )
}

export default App