import JoinUser from "../../components/form/JoinUser";
import AuthLayout from "../../components/layout/user/AuthLayout";

export default function JoinPage() {
  return(
    <AuthLayout title={'회원가입'} element={<JoinUser/>} />
  )
}

