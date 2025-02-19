import { Link, useNavigate } from "react-router-dom";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { login } from "../services/authServices";
const LoginForm = () => {
  const [account , setAccount] = useState("");
  const [password , setPassword] = useState("");
  const [hidePassword , setHidePassword] = useState(true);
  const [errors , setErrors] = useState({});
  const [showSuccess , setShowSuccess] = useState(false);
  const navigate = useNavigate();
   const validate = () => {
      let error = {};
      if (account.trim() === "") {
        error.account = "Account is required";
      }
      
      if (password.trim().length < 6) {
        error.password = "Password is more than 6 characters";
      }
      setErrors(error);
    };
    const handleLogin = async (e) => {
      e.preventDefault();
      validate();
      try {
        if (Object.keys(errors).length === 0) {
          const data = await login(account, password);
          if (data) {
            setShowSuccess(true);         
            setTimeout(() => {
              navigate('/')
            }, 3000);
        }
        return data;
      }
      } catch (error) {
        setShowSuccess(false);
        console.log(error);
        
      }
      
    };
  return (
    <>
    <div className="flex justify-start  px-10 space-x-6  font-semibold text-gray-700  text-2xl">
            <Link  to={"/auth/login"}> Login </Link>
            <Link to={"/auth/signup"}> Sign up </Link>
          </div>
      <div className=" flex flex-col  p-8 rounded-lg  w-[90%] ">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            onChange={(e)=>{
              setAccount(e.target.value);
            }}
            placeholder="Enter your email address or username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type="text"
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={()=>{setHidePassword( hidePassword => !hidePassword)}}
            >
             {hidePassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          <Link href="#" className="text-blue-500 text-sm float-right mt-3">
            Forgot password
          </Link>
        </div>
        <p className="text-xs text-gray-500 text-center mb-5 mt-4">
          By clicking Log in, you accept Quizlet's{" "}
          <Link href="#" className="text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500">
            Privacy Policy
          </Link>
        </p>
        <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Log in
        </button>
        <div className="mt-4 text-center">
          <Link href="#" className="text-gray-600">
            New to Quizlet?{" "}
            <span className="text-blue-500">Create an account</span>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="#" className="text-blue-500">
            Log in with magic link
          </Link>
        </div>
        <div
          className={`fixed top-5 transition-all duration-500 ease-in-out z-50 p-3 bg-green-500 text-white rounded
          ${showSuccess ? "right-5 opacity-100" : "-right-full opacity-0"}`}
        >
          Đăng nhập thành công!
        </div>
      </div>
    </>
  );
};
export default LoginForm;
