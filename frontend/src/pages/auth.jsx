import { Link } from "react-router-dom";
import Button from "../components/button";
import InputBox from "../components/input-box";
import "./styles/auth.css";
import AnimatedPage from "./animated-page";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthPage = (props) => {
    return (
        <AnimatedPage>
            <>{props.login ? <Login /> : <SignUp />}</>;
        </AnimatedPage>
    );
};

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8000/get_token/', {
            username,
            password,
          });
    
          const token = response.data.token;
          console.log(token)
          //localStorage.setItem('token', token);
          setMessage('Login successful');
          setError('');
          toast.success('Login was successful!');
        } catch (error) {
          setError('Invalid username or password');
          setMessage('');
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

const SignUp = () => {
    return (
        <>
            <div className="form-container">
                <h1 className="title-font">Sign Up Form!</h1>
                <form className="form">
                    <InputBox
                        type="text"
                        placeholder="username"
                        id="s-username"
                    />
                    <InputBox type="email" placeholder="email" id="s-email" />
                    <InputBox
                        type="password"
                        placeholder="password"
                        id="s-password"
                    />
                    <InputBox
                        type="password"
                        placeholder="confirm password"
                        id="s-confirm-password"
                    />

                    <p className="navigate1">
                        {"already have an account? "}
                        <Link to={"/auth/login"}>Login Now!</Link>
                    </p>

                    <Button text={"Create The Account!!"} onClick={() => {}} />
                </form>
            </div>
        </>
    );
};

export default AuthPage;
