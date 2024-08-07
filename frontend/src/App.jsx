import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import Test from "./pages/test";
import AuthPage from "./pages/auths/auth";
import { AnimatePresence } from "framer-motion";
import { AuthContext, AuthProvider } from "./contexts/authContext";
import { useContext } from "react";

function App() {
    const location = useLocation();

    return (
        <>
            <AuthProvider>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/auth/login"
                            element={<AuthPage login={true} />}
                        />
                        <Route
                            path="/auth/signup"
                            element={<AuthPage login={false} />}
                        />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </AnimatePresence>
            </AuthProvider>
        </>
    );
}

const ProtectedRoute = ({ children }) => {
    const { IsAuthenticated } = useContext(AuthContext);

    if (IsAuthenticated) {
        return children;
    } else {
        return <Navigate to="/auth/login" />;
    }
};

export default App;
