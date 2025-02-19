import { Link } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { use, useEffect, useState } from "react";
import { register } from "../services/authServices";

const SignUpForm = () => {
  const [account, setAccount] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const validate = () => {
    let error = {};
    if (account.trim() === "") {
      error.account = "Account is required";
    }
    if (gmail.trim() === "") {
      error.userName = "User Name is required";
    }
    if (password.trim().length < 6) {
      error.password = "Password is more than 6 characters";
    }
    setErrors(error);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    validate();
    try {
      if (Object.keys(errors).length === 0) {
        const data = await register(account, gmail, password);
        setShowSuccess(true);
        return data;
      }
    } catch (error) {
      setShowSuccess(false);
      console.log(error);
      
    }
    return null;
  };


  return (
    <>
      <div className="flex justify-start  px-10 space-x-6  font-semibold text-gray-700  text-2xl">
        <Link to={"/auth/login"}> Login </Link>
        <Link to={"/auth/signup"}> Sign up </Link>
      </div>
      <div className=" flex flex-col  p-8 rounded-lg  w-[90%] ">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Account</label>
          <input
            type="text"
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            placeholder="Enter your account"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          <label className="text-red-500 text-sm ">
            {errors.account}
          </label>
        </div>
        <div className="mb-5 relative">
          <label className="block text-gray-600 mb-1">Gmail</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your  Gmail" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
            <label className="text-red-500 text-sm ">
              {errors.userName}{" "}
            </label>
          </div>
        </div>
        <div className="mb-5  relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label className="text-red-500 text-sm">
              {errors.password}{" "}
            </label>
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => {
                setHidePassword((hidePassword) => !hidePassword);
              }}
            >
              {hidePassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500  flex items-center mb-5 mt-6">
          <input type="checkbox" className="mr-2" />I accept Quizlet's{" "}
          <Link href="#" className="text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500">
            Privacy Policy
          </Link>
        </p>
        <div className="flex flex-col gap-y-4">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3  rounded-lg"
            onClick={handleRegister}
          >
            Sign Up
          </button>

          <button className="w-full bg-white-600  text-blue-400 py-3 rounded-lg">
            Already have an account? Log in
          </button>
        </div>
        <div
          className={`fixed top-5 transition-all duration-500 ease-in-out z-50 p-3 bg-green-500 text-white rounded
          ${showSuccess ? "right-5 opacity-100" : "-right-full opacity-0"}`}
        >
          Đăng ký thành công!
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
