import "./input-box.css";

const InputBox = () => {
    return (
        <>
            <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
            </div>
        </>
    );
};

export default InputBox;