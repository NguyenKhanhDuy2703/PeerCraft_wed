import  {axiosInstance}  from "./axios.config";

export const login =  async (account , password) => {
   const urlLogin = "auth/login";
   const requestLogin = await axiosInstance.post(
    urlLogin,
    {
        account ,
        password
    }
   );
   return requestLogin.data;
};
export const register = async(account,password,email) =>{
    const urlLogin = "auth/register";
    console.log(account , password , email);    
    const requestRegister = await axiosInstance.post(
     urlLogin,
     {
         account ,
         password,
         email
     }
    );
    return requestRegister.data;
};

