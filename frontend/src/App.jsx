import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import Test from "./pages/test";
import AuthPage from "./pages/auths/auth";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route
                        path="/auth/login"
                        element={<AuthPage login={true} />}
                    ></Route>
                    <Route
                        path="/auth/signup"
                        element={<AuthPage login={false} />}
                    ></Route>
                    <Route path="/test" element={<Test />}></Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
