import { Link } from "react-router-dom";
import React from 'react';
import { FiUpload } from "react-icons/fi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";



const ProjectTimeline = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100 ">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/moMoM6dHr9MzIq7MOh2ObGcmXlqxJYtj67cJsWq9PYI.jpg"
                        alt="Project Icon"
                        className="w-10 h-10 rounded-full"
                        width="40"
                        height="40"
                    />
                    <h1 className="text-xl font-semibold">NCKH</h1>
                    <i className="fas fa-ellipsis-h text-gray-500"></i>
                </div>
                <div className="flex items-center space-x-4">
                    <i className="fas fa-globe text-gray-500"></i>
                    <i className="fas fa-bell text-gray-500"></i>
                    <i className="fas fa-user-circle text-gray-500"></i>
                </div>
            </div>
            {/* Navigation */}
            <div className="flex items-center bg-white p-2 border-b border-gray-200 space-x-4">
                <nav className="flex space-x-4">
                    <Link href="#" className="text-blue-600 font-semibold">Summary</Link>
                    <Link href="#" className="text-gray-600">Timeline</Link>
                    <Link href="#" className="text-gray-600">Backlog</Link>
                    <Link href="#" className="text-gray-600">Board</Link>
                    <Link href="#" className="text-gray-600">Calendar</Link>
                    <Link href="#" className="text-gray-600">List</Link>
                    <Link href="#" className="text-gray-600">Forms</Link>
                    <Link href="#" className="text-gray-600">Goals</Link>
                    <Link href="#" className="text-gray-600">Issues</Link>
                    <Link href="#" className="text-gray-600">Code</Link>
                    <Link href="#" className="text-gray-600">Archived issues</Link>
                    <Link href="#" className="text-gray-600">Pages</Link>
                    <Link href="#" className="text-gray-600">More</Link>
                </nav>
            </div>
            {/* Main Content */}
            <div className="flex flex-col h-screen bg-white">
                <div className="flex flex-1 overflow-hidden">
                    <div className="w-1/6 bg-gray-100 p-4">
                        <h2 className="font-semibold text-gray-700 ">Sprints</h2>
                        <div className="mt-4">
                            <button className="flex items-center text-gray-700">
                                <i className="fas fa-plus mr-2"></i>
                                Create Epic
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <div className="flex items-center justify-between border-b border-gray-200">
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-1/4 text-center py-2 border-r border-gray-200">January</div>
                                <div className="w-1/4 text-center py-2 border-r border-gray-200 bg-gray-100">February</div>
                                <div className="w-1/4 text-center py-2 border-r border-gray-200">March</div>
                                <div className="w-1/4 text-center py-2">April</div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div className="absolute top-0 left-1/2 w-px h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end p-4 border-t border-gray-200">
                    <button className="px-4 py-2 text-gray-700">Today</button>
                    <button className="px-4 py-2 text-gray-700">Weeks</button>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded">Months</button>
                    <button className="px-4 py-2 text-gray-700">Quarters</button>
                    <button className="px-4 py-2 text-gray-700"><i className="fas fa-info-circle"></i></button>
                    <button className="px-4 py-2 text-gray-700"><i className="fas fa-times"></i></button>
                </div>
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between bg-white p-2 border-t border-gray-200">
                <div className="flex space-x-2 align-right">
                    <button className="border border-gray-300 rounded p-2">Today</button>
                    <button className="border border-gray-300 rounded p-2">Weeks</button>
                    <button className="border border-gray-300 rounded p-2">Months</button>
                    <button className="border border-gray-300 rounded p-2">Quarters</button>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-info-circle text-gray-500"></i>
                    <i className="fas fa-cog text-gray-500"></i>
                </div>
            </div>
        </div>
    );
};

export default ProjectTimeline;