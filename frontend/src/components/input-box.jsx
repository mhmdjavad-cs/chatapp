import "./input-box.css";

const InputBox = (props) => {
    return (
        <>
            <div className="input-box">
                <input
                    type={props.type}
                    name={props.type}
                    id={props.id}
                    className="input-field"
                    onChange={(e)=>(props.setFunc(e.target.value))}
                    required
                />
                
                <div className="input-label">{props.placeholder}</div>
            </div>
        </>
    );
};

export default InputBox;
