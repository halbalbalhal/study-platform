import './LinkToSignUp.css'

function LinkToSignUp (props) {
    return(
        <span className='login__signUp'>Don’t have an account?<a href={props.link}> Sign up</a></span>
    )
}

export default LinkToSignUp