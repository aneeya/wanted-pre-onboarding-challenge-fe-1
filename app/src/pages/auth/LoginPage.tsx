import LoginUser from "../../components/form/LoginUser";
import AuthLayout from "../../components/layout/user/AuthLayout";

export default function LoginPage() {
  const storedToken = window.localStorage.getItem('token')
 
  return(
    <>
      { storedToken === null 
        &&
        <AuthLayout title={'로그인'} element={<LoginUser/>} /> 
      }
    </>
  ) 
}

