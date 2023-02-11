import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import useConfirmModal from "../../hooks/Confirm_modal";
import { useJoinUser } from "../../hooks/User_query";
import joinCondition, { initState } from "../../utils/reducer/joinCondition";
import { ContainBT, OutlineBT } from "../../styles/buttonStyles";
import Auth from "../../styles/layout/authLayout";
import { joinButtonActive } from "../../utils/joinvaildate";

export default function JoinUser() {
  const { setConfirm, toggleConfirm }  = useConfirmModal({
    text: "가입을 완료 하시겠습니까?",
    ok: confirmUserInfo}) 
  const [ state, dispatch ] = useReducer(joinCondition, initState)
  const { email, password, emailValidation, passwordValidation } = state

  const joinMutation = useJoinUser({email, password})
  
  const nav = useNavigate()

  const changeUserInfo = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement
    dispatch({type: name, value: value})
  }
  
  function confirmUserInfo() {
    joinMutation.mutate()
  }
  
  
  
  return (
    <>
      {setConfirm}
      <Auth.Form>
        <Auth.InputLayout>
          <Auth.Label htmlFor="email">이메일</Auth.Label>
          <Auth.Input
            type="text"
            name="email"
            id="email"
            placeholder="todo@todo.com"
            onChange={changeUserInfo}
            requried
            color={emailValidation}
            />
          <Auth.ValidateState >{emailValidation}</Auth.ValidateState>
        </Auth.InputLayout>
        <Auth.InputLayout>
          <Auth.Label htmlFor="password">비밀번호</Auth.Label>
          <Auth.Input
            type="password"
            name="password"
            id="password"
            placeholder="8자리이상 입력해주세요"
            onChange={changeUserInfo}
            requried
            color={passwordValidation}
            />
          <Auth.ValidateState >{passwordValidation}</Auth.ValidateState>
        </Auth.InputLayout>
        <Auth.Buttons>
          <ContainBT type="button" theme="medium" disabled={joinButtonActive(state)} onClick={toggleConfirm}>join</ContainBT>
          <OutlineBT type="button" theme="medium" onClick={() => nav('/')}>cancel</OutlineBT>
        </Auth.Buttons>
      </Auth.Form>
    </>
  )
}



