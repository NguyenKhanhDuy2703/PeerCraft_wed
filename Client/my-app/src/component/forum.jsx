import ForumPost from './forumPost.jsx';
const  Forum  = () =>{
 return(
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <button className="text-blue-500 font-semibold">New</button>
      </div>
        <ForumPost />
    </div>
  </div>
 )
}
export default Forum;