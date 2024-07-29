import './button.css'


const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    return <button className="btn" onClick={props.onClick}>{props.text}</button>;
}
 
export default Button

