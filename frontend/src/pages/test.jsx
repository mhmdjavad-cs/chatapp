import "./test.css";

const Test = () => {
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

export default Test;
