import InputBox from "../../components/input-box";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import endPoints from "../../mySettings";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const {setIsAuthenticated, setToken} = useContext(AuthContext);

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        

        try{
            if (password === confirmPassword){
                
                const userData = {
                    username,
                    email,
                    password
                }

                const response = await axios.post(
                    endPoints["signup"],
                    userData,
                    {
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    }
                )
            
                console.log(response.data);

                if (response.data.status === "error"){
                    toast.error(response.data.message)
                }else{
                    toast.success(response.data.message);
                    setToken(response.data.token);
                    setIsAuthenticated(true);
                    navigate('/');
                }


                
            }else{
                toast.error("passwords don't match!")
            }
            

        }catch(error){
            toast.error("sign up wasn't successfull!!")
        }


    };

    return (
        <>
            <div className="form-container">
                <h1 className="title-font">Sign Up Form!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <InputBox
                        type="text"
                        placeholder="username"
                        id="s-username"
                        setFunc={setUsername}
                    />
                    <InputBox 
                        type="email" 
                        placeholder="email" 
                        id="s-email"
                        setFunc = {setEmail} 
                    />
                    <InputBox
                        type="password"
                        placeholder="password"
                        id="s-password"
                        setFunc={setPassword}
                    />
                    <InputBox
                        type="password"
                        placeholder="confirm password"
                        id="s-confirm-password"
                        setFunc={setConfirmPassword}
                    />

                    <p className="navigate1">
                        {"already have an account? "}
                        <Link to={"/auth/login"}>Login Now!</Link>
                    </p>

                    <Button text={"Create The Account!!"} onClick={() => {}} />
                </form>
            </div>
            <ToastContainer/>
        </>
    );
};

export default SignUp;
