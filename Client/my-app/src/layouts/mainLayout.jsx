import { Outlet } from "react-router-dom";
import Navbar from "../component/mainComponent/navBar";
import Sidebar from "../component/mainComponent/sideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 p-4 flex items-center ">
        <h2 className="flex-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text ml-4">
          PeerCraft
        </h2>

        <div className="flex-8">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="fixed top-25 left-4 h-[92vh] w-64 bg-white shadow-lg rounded-xl z-10 overflow-hidden">
          <Sidebar />
        </div>

        {/* Main Page Content */}
        <div className="flex-5 p-6   md:ml-72 transition-all duration-300">
          <Outlet />
        </div>
        {/* other activity */}
        <div className="flex-2"></div>
      </div>
    </div>
  );
};

export default MainLayout;
