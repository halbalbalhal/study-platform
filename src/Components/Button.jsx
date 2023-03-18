import './Button.css'

function Button(props) {
    return(
        <button className='column__loginBtn'>{props.name}</button>
    )
}

export default Button