import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

import AuthenLayout from "../layouts/authenLayout.jsx";
import LoginForm from "../component/auth/loginForm.jsx";
import SignUpForm from "../component/auth/signUp.jsx";

import LibraryPage from "../pages/library/libraryPage.jsx";
import ManagerProjectLayout from "../layouts/managerProjectLayout.jsx"
import MainManagerProject from "../pages/manager/mainManagerProject.jsx";

import ForumLayout from "../layouts/ForumLayout.jsx";
import CategoryForum from "../pages/forum/categoryForum.jsx"
import MainForum from "../pages/forum/mainForum.jsx"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

          <Route path="forum"  element={<ForumLayout />}>
            <Route index element = {<MainForum />}/>
            <Route path=":category" element={<CategoryForum />} />
          </Route> 

          <Route path="library" element={<LibraryPage />} />  
          <Route path="managerproject" element={<ManagerProjectLayout />} >
              <Route index element = {<MainManagerProject />}/>
          </Route>
       
      </Route>
       
        <Route path="/auth" element={<AuthenLayout />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
        </Route>
    </Routes>
  );
};
export default AppRouter;
