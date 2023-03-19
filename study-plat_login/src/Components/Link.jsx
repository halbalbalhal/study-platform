import './Link.css'

function Link (props) {
    return(
        <span className='login__textWithLink'>{props.text}<a href={props.link}>{props.textLink}</a></span>
    )
}

export default Link