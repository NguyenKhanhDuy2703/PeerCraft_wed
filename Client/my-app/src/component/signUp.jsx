import { Link } from "react-router-dom";
import { LuEyeClosed } from "react-icons/lu";
const SignUpForm = () => {
  return (
    <>
      <div className="flex justify-start  px-10 space-x-6  font-semibold text-gray-700  text-2xl">
        <Link to={"/auth/login"}> Login </Link>
        <Link to={"/auth/signup"}> Sign up </Link>
      </div>
      <div className=" flex flex-col  p-8 rounded-lg  w-[90%] ">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter your email address or username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">User Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your  User Name "
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
            >
              <LuEyeClosed />{" "}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500  mb-5 mt-6">
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
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3  rounded-lg">
            Sign Up
          </button>

          <button className="w-full bg-white-600 hover:bg-gray-400 text-gray-400 py-3 rounded-lg">
            Already have an account? Log in
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUpForm;
