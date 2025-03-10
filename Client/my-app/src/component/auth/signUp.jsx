import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
import { register } from "../../services/authServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const [account, setAccount] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let error = {};
    if (!account.trim()) error.account = "Account is required";
    if (!gmail.trim()) error.gmail = "Gmail is required";
    if (password.length < 6) error.password = "Password must be at least 6 characters";

    setErrors(error);
    return Object.keys(error).length === 0; 
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const data = await register(account, gmail, password);
      if (data) {
        toast.success("🎉 Đăng ký thành công!", { autoClose: 2000 });
        setTimeout(() => navigate('/auth/login'), 2500);
      }
    } catch (error) {
      toast.error("❌ Đăng ký thất bại! Vui lòng thử lại.");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-start px-10 space-x-6 font-semibold text-gray-700 text-2xl">
        <Link to={"/auth/login"}> Login </Link>
        <Link to={"/auth/signup"}> Sign up </Link>
      </div>
      <div className="flex flex-col p-8 rounded-lg w-[90%]">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Account</label>
          <input
            type="text"
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Enter your account"
            className={`w-full px-3 py-2 border rounded-lg ${errors.account ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
          />
          {errors.account && <p className="text-red-500 text-sm">{errors.account}</p>}
        </div>

        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Gmail</label>
          <input
            type="text"
            placeholder="Enter your Gmail"
            onChange={(e) => setGmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg ${errors.gmail ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
          />
          {errors.gmail && <p className="text-red-500 text-sm">{errors.gmail}</p>}
        </div>

        <div className="mb-5 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <p className="text-xs text-gray-500 flex items-center mb-5 mt-6">
          <input type="checkbox" className="mr-2" /> I accept Quizlet's{" "}
          <Link className="text-blue-500">Terms of Service</Link> and{" "}
          <Link className="text-blue-500">Privacy Policy</Link>
        </p>

        <div className="flex flex-col gap-y-4">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-transform transform hover:scale-105"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-blue-600 py-3 rounded-lg transition">
            Already have an account? Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
