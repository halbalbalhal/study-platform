import './Button.css'

function Button(props) {
    return(
        <button className='column__loginBtn'>{props.title}</button>
    )
}

export default Button