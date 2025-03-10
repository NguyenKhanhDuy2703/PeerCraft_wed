import { Link, useNavigate } from "react-router-dom";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/authServices";

const LoginForm = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate inputs
  const validate = () => {
    let error = {};
    if (!account.trim()) {
      error.account = "Account is required";
    }
    if (password.trim().length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    setErrors(error);
    return error; // Trả về object lỗi
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = validate(); // Lấy lỗi từ validate()

    if (Object.keys(error).length > 0) {
      return; // Dừng nếu có lỗi
    }

    try {
      const data = await login(account, password);
      if (data) {
        toast.success("Đăng nhập thành công!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại! Vui lòng thử lại.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-start px-10 space-x-6 font-semibold text-gray-700 text-2xl">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Sign up</Link>
      </div>

      <div className="flex flex-col p-8 rounded-lg w-[90%]">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Enter your email address or username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.account && <p className="text-red-500 text-sm">{errors.account}</p>}
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <Link to="#" className="text-blue-500 text-sm float-right mt-3">
            Forgot password
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center mb-5 mt-4">
          By clicking Log in, you accept Quizlet's{" "}
          <Link to="#" className="text-blue-500">Terms of Service</Link> and{" "}
          <Link to="#" className="text-blue-500">Privacy Policy</Link>.
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Log in
        </button>

        <div className="mt-4 text-center">
          <Link to="#" className="text-gray-600">
            New to Quizlet? <span className="text-blue-500">Create an account</span>
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link to="#" className="text-blue-500">Log in with magic link</Link>
        </div>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default LoginForm;
