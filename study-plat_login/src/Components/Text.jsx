import './Text.css'

function Text(props) {
    return(
        <div className='column__group'>
            <div className='group__border'></div>
            <span className='group__text'>{props.title}</span>
            <div className='group__border'></div>
        </div>
    )
}

export default Text