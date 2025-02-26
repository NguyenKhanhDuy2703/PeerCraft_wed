import { FaEye, FaComment, FaHeart } from "react-icons/fa";

const ForumPost = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold">user</span>
        <span className="ml-2 text-gray-500 text-sm">time</span>
      </div>
      <h2 className="font-bold mb-2">title</h2>
      <p className="text-gray-600 text-sm mb-2">content</p>
      <div className="flex gap-2 mb-3">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded">tag</span>
      </div>
      <div className="flex text-gray-500 text-sm gap-4">
        <span className="flex items-center gap-1">
          <FaEye /> 125
        </span>
        <span className="flex items-center gap-1">
          <FaComment /> 15
        </span>
        <span className="flex items-center gap-1">
          <FaHeart /> 155
        </span>
      </div>
    </div>
  );
};
export default ForumPost;
