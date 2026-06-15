import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPassword from "../pages/ResetPassword";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/RegisterPage" element={<RegisterPage/>}/>
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}