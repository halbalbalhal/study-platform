import Wrapper from './Wraper'
import PictureWithText from '../Components/PictureWithText'
import LinkToSignUp from '../Components/LinkToSignUp'
import './App.css'

function App () {
    return(
        <div className='login'>
            <PictureWithText />
            <Wrapper />
            <LinkToSignUp />
        </div>
    )
}

export default App