import './Button.css'

function Button(props) {
    return(
        <button className='column__loginBtn'>{props.title}</button>
    )
    function Width () {
        document.querySelector('.column__loginBtn').style.width = '20px'
    }
}

export default Button