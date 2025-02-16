import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import AuthenLayout from "../layouts/authenLayout.jsx";
import LoginForm from "../component/loginForm.jsx";
import SignUpForm from "../component/signUp.jsx";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

      </Route>
       
        <Route path="/auth" element={<AuthenLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        </Route>
    </Routes>
  );
};
export default AppRouter;
