import { Link } from "react-router-dom";
import Button from "../components/button";
import InputBox from "../components/input-box";
import "./styles/auth.css";
import AnimatedPage from "./animated-page";

const AuthPage = (props) => {
    return (
        <AnimatedPage>
            <>{props.login ? <Login /> : <SignUp />}</>;
        </AnimatedPage>
    );
};

const Login = () => {
    return (
        <>
            <div className="form-container">
                <h1 className="title-font">Login Form!</h1>
                <form className="form">
                    <InputBox
                        type="text"
                        placeholder="username"
                        id="username"
                    />
                    <InputBox
                        type="password"
                        placeholder="password"
                        id="password"
                    />

                    <p className="navigate1">
                        {"don't have an account? "}
                        <Link to={"/auth/signup"}>Sign Up Here!</Link>
                    </p>

                    <Button text={"Login To The Account"} onClick={() => {}} />
                </form>
            </div>
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
