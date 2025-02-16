import { Link, Outlet } from "react-router-dom";
import HinhLogin from "../assets/images/hinhLogin.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthenLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.pathname === "/auth") {
      navigate("/auth/login");
    }
  }, [navigate, location.pathname]);
  return (
    <div className="flex w-full h-screen bg-gray-800">
      <div
        className="text-white w-1/2   bg-cover bg-center"
        style={{ backgroundImage: `url(${HinhLogin})` }}
      >
        {" "}
      </div>
      <div className="flex flex-col w-1/2 items-center  justify-center min-h-screen bg-gray-100 ">
        <div className="w-full  flex flex-col justify-center">
        <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AuthenLayout;
