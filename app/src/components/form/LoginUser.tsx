import { useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/User_query";
import joinCondition, { initState } from "../../utils/reducer/joinCondition";
import { ContainBT, OutlineBT } from "../../styles/buttonStyles";
import Auth from "../../styles/layout/authLayout";
import { joinButtonActive } from "../../utils/joinvaildate";

export default function LoginUser() {
  const [ state, dispatch ] = useReducer(joinCondition, initState)
  const { email, password, emailValidation, passwordValidation } = state
  const inputRef = useRef<HTMLInputElement>(null)
  const nav = useNavigate()
  const loginMutation = useLoginUser({email, password})

  const chagneLoginUser = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement 
    dispatch({type: name, value: value})
  }

  const submitLoginUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate()
    
  }

  useEffect(() => {
    const errorDom = document.querySelector('.error-messeage') as HTMLDivElement
    errorDom.style.display = 'block'
    let errorState = loginMutation.isError
    if(errorState) {
      inputRef.current?.focus()
      document.addEventListener('keydown', () => {
        errorDom.style.display = 'none'
      })
    }
    
  }, [loginMutation.isError])
  
  return(
    <>
    <Auth.Form onSubmit={submitLoginUser}>
      <Auth.InputLayout>
        <Auth.Label htmlFor="email">이메일</Auth.Label>
        <Auth.Input type="text" name="email" id="email" color={emailValidation} required onChange={chagneLoginUser} ref={inputRef}/>
        <Auth.ValidateState >{emailValidation}</Auth.ValidateState>
      </Auth.InputLayout>
      <Auth.InputLayout>
        <Auth.Label htmlFor="password">비밀번호</Auth.Label>
        <Auth.Input type="password" name="password" id="password"  color={passwordValidation} required onChange={chagneLoginUser}/>
        <Auth.ValidateState>{passwordValidation}</Auth.ValidateState>
      </Auth.InputLayout>
      <Auth.Error className="error-messeage">{loginMutation.isError && "잘못된 아이디 및 패스워드 입니다."}</Auth.Error>
      <Auth.Buttons>
        <ContainBT type="submit" theme="medium" disabled={joinButtonActive(state)}>login</ContainBT>
        <OutlineBT type="button" theme="medium" onClick={() => nav('/')}>cancel</OutlineBT>
      </Auth.Buttons>
    </Auth.Form>
    </>
  )
}

