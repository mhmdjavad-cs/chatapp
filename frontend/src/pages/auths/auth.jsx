import "./auth.css";
import AnimatedPage from "../animated-page";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login";
import SignUp from "./signup";

const AuthPage = (props) => {
    return (
        <AnimatedPage>
            <>{props.login ? <Login /> : <SignUp />}</>;
        </AnimatedPage>
    );
};

export default AuthPage;
