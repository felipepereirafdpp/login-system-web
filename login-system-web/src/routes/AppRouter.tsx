import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/dashboard";
import AllUserPage from "../pages/AllUsersPage";
import SearchEmailPage from "../pages/SearchEmailPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/RegisterPage" element={<RegisterPage/>}/>
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-all" element={<AllUserPage />} />
      <Route path="/searchEmail" element={<SearchEmailPage />} />
      
    </Routes>
  );
}