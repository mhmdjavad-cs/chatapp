import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import InputBox from "../../components/input-box";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import endPoints from "../../mySettings";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setIsAuthenticated, setToken} = useContext(AuthContext);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(endPoints["get_token"], {
                username,
                password,
            });

            const token = response.data.token;
            console.log(token);
            //localStorage.setItem('authToken', token);
            toast.success("Login was successful!");
            setIsAuthenticated(true);
            setToken(token);
            navigate('/');
        } catch (error) {
            toast.error("Faild to Login!");
        }
    };

    return (
        <>
            <div className="form-container">
                <h1 className="title-font">Login Form!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <InputBox
                        type="text"
                        placeholder="username"
                        id="username"
                        setFunc={setUsername}
                    />
                    <InputBox
                        type="password"
                        placeholder="password"
                        id="password"
                        setFunc={setPassword}
                    />

                    <p className="navigate1">
                        {"don't have an account? "}
                        <Link to={"/auth/signup"}>Sign Up Here!</Link>
                    </p>

                    <Button text={"Login To The Account"} onClick={() => {}} />
                </form>
                <ToastContainer />
            </div>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>} */}
        </>
    );
};

export default Login;
