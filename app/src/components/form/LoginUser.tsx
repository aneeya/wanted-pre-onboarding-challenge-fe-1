import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/User_query";
import joinCondition, { initState } from "../../reducer/joinCondition";
import { ContainBT, OutlineBT } from "../../styles/buttonStyles";
import Auth from "../../styles/layout/authLayout";
import { joinButtonActive } from "../../validatation/joinvaildate";

export default function LoginUser() {
  const [ state, dispatch ] = useReducer(joinCondition, initState)
  const { email, password, emailValidation, passwordValidation } = state
  const nav = useNavigate()
  const loinMutation = useLoginUser({email, password})

  const chagneLoginUser = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement 
    dispatch({type: name, value: value})
  }

  const submitLoginUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    loinMutation.mutate()
    
  }


  return(
    <Auth.Form onSubmit={submitLoginUser}>
      <Auth.InputLayout>
        <Auth.Label htmlFor="email">이메일</Auth.Label>
        <Auth.Input type="text" name="email" id="email" color={emailValidation} required onChange={chagneLoginUser}/>
        <Auth.ValidateState >{emailValidation}</Auth.ValidateState>
      </Auth.InputLayout>
      <Auth.InputLayout>
        <Auth.Label htmlFor="password">비밀번호</Auth.Label>
        <Auth.Input type="password" name="password" id="password"  color={passwordValidation} required onChange={chagneLoginUser}/>
        <Auth.ValidateState >{passwordValidation}</Auth.ValidateState>
      </Auth.InputLayout>
      <Auth.Buttons>
        <ContainBT type="submit" theme="medium" disabled={joinButtonActive(state)}>login</ContainBT>
        <OutlineBT type="button" theme="medium" onClick={() => nav('/')}>cancel</OutlineBT>
      </Auth.Buttons>
    </Auth.Form>
  )
}

