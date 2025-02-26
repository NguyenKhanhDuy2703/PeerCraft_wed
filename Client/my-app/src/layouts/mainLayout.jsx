import { Link, Outlet } from "react-router-dom";
import InputSearch from "../component/input_search";
import { FaPlus } from "react-icons/fa6";
const MainLayout = () => {
  return (
    <div className="main-layout flex flex-col  h-screen ">
      <nav className="flex items-center bg-white p-4 shadow-md">
        <div className="flex-3 font-bold text-lg">Logo</div>
        <div className="flex-8 hidden lg:flex space-x-6 text-gray-700">
          <Link href="home" className="hover:text-blue-500">
            Trang chủ
          </Link>
          <Link href="#" className="hover:text-blue-500">
            Diễn đàn
          </Link>
          <Link href="#" className="hover:text-blue-500">
            Thư viện
          </Link>
          <Link href="#" className="hover:text-blue-500">
            Roadmap
          </Link>
        </div>
        <div className="flex-14 flex justify-center">
          <InputSearch />
        </div>
        <div className="flex-2 text-right">
          <img className="w-10 h-10 rounded-full bg-amber-400" />
        </div>
      </nav>

      <div className="flex ">
        <div className="bg-gray-100 p-4 flex-1 h-screen border-r-1 border-gray-400">
          <div className=" flex flex-col space-y-2 mb-4">
            <div className="flex justify-between items-center text-gray-500 text-sm font-semibold mb-4">
              <span> Diễn đàn </span>
              <FaPlus className="w-4 h-4 cursor-pointer" />
            </div>
            <ul className="space-y-3">
              <li
                className={`flex items-center justify-between 
             "font-bold" : "font-normal" } text-gray-800 cursor-pointer`}
              >
                <Link to="/forum">diễn đàn 1</Link>
              

              </li>
              <li
                className={`flex items-center justify-between 
             "font-bold" : "font-normal" } text-gray-800 cursor-pointer`}
              >
                <Link to="/forum">diễn đàn 2</Link>
              

              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-gray-500 text-sm font-semibold mb-4">
              <span> Dự án dã tham gia  </span>
              <FaPlus className="w-4 h-4 cursor-pointer" />
            </div>
            <ul className="space-y-3">
              <li
                className={`flex items-center justify-between 
             "font-bold" : "font-normal" } text-gray-800 cursor-pointer`}
              >
                <Link to="/forum">dự án 1</Link>
              </li>
              <li
                className={`flex items-center justify-between 
             "font-bold" : "font-normal" } text-gray-800 cursor-pointer`}
              >
                <Link to="/forum">dự án 2</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-8 main-content">
          <Outlet />
        </div>
        <div className="flex-2">
          <div className="bg-gray-100 p-4 h-screen">Right sidebar</div>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
