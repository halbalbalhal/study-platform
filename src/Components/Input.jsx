import './Input.css'

function Input(props) {
    return(
        <div className='column__input'>
            <input type={props.type} className='input' required />
            <label for='' className='labelForInput'>{props.name}</label>
        </div>
    )
}

export default Input