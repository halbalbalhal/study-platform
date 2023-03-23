import './Button.css'

function Button(props) {
    return(
        <button className='column__loginBtn'>{props.title}</button>
    )
    function Width (className) {
        document.querySelector(className).style.width = '20px'
    }
}

export default Button