import { CiSearch } from "react-icons/ci";

const InputSearch = () =>{
    return (
       <div className="w-[48%] flex relative"> 
         <input
          type="text" 
          placeholder="Search Flashcard ..." 
            className="w-full bg-gray-600 pl-4 pr-4 py-2 border border-gray-700 rounded-lg medium w-full
                        shadow-sm focus:outline-none focus:ring-2 
                        focus:ring-blue-600 focus:border-transparent"
          /> 
          <CiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 text-[28px] " />
       </div>
    )
};
export default InputSearch;
