import React, { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useConfirmModal from "../../hooks/Confirm_modal";
import { useJoinUser } from "../../hooks/User_query";
import joinCondition, { initState } from "../../reducer/joinCondition";
import { cancelButton, joinButton } from "../../styles/styleProps";
import { joinButtonActive } from "../../validatation/joinvaildate";
import Button from "../common/Button"; 
import HiddenButton from "../common/HiddenButton";

export default function JoinUser() {
  const [ setConfirm, toggleConfirm ] = useConfirmModal({
    text: "회원가입을 완료 하시겠습니까?",
    ok: confirmUserInfo}) 
  const [ state, dispatch ] = useReducer(joinCondition, initState)
  const { email, password, emailValidation, passwordValidation } = state

  const joinMutation = useJoinUser({email, password})
  
  const nav = useNavigate()
  const buttonRef = useRef(null)

  const changeUserInfo = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement
    dispatch({type: name, value: value})
  }
  
  function confirmUserInfo() {
    console.log('hi')
    const hiddenButton = buttonRef.current! as HTMLButtonElement
    hiddenButton.click()
  }
  
  const submitUserInfo = (e: SubmitEvent) => {
    e.preventDefault()
    joinMutation.mutate()
  }

  const joinButtonStyle = { ...joinButton,
    disabled: joinButtonActive(state),
    onClick: toggleConfirm as () => void
  }

  const cancelButtonStyle = { ...cancelButton,
    onClick: () => nav('/')
  }
  
  return (
    <>
      {setConfirm}
      <S.Form onSubmit={submitUserInfo}>
        <S.InputLayout>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            type="text"
            name="email"
            id="email"
            placeholder="todo@todo.com"
            onChange={changeUserInfo}
            requried
            color={emailValidation}
            />
          <S.ValidateState >{emailValidation}</S.ValidateState>
        </S.InputLayout>
        <S.InputLayout>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input
            type="password"
            name="password"
            id="password"
            placeholder="8자리이상 입력해주세요"
            onChange={changeUserInfo}
            requried
            color={passwordValidation}
            />
          <S.ValidateState >{passwordValidation}</S.ValidateState>
        </S.InputLayout>
        <S.Buttons>
          <Button {...joinButtonStyle}/>
          <Button {...cancelButtonStyle}/>
          <HiddenButton a="hidden" ref={buttonRef} />
        </S.Buttons>
      </S.Form>
    </>
  )
}



//style

const S: any = {}

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

S.InputLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30rem;
  height: 10rem;
`

S.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
S.Input = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 2px solid ${(prop) => {
    return prop.color === '' ? 
           'var(--color-gray-purple0)' : 
           'var(--color-red-orange)'
  }};
  padding: 1rem;
  font-size: 1.4rem;
`
S.ValidateState = styled.span`
  position: absolute;
  top: -9%;
  left: 25%;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 18rem;
  height: 3rem;
  font-size: 1.2rem;
  color: var(--color-red-orange);
`

S.Buttons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 32rem;
  height: 5rem;
  margin-top: 4rem;
`

S.HiddenButton = styled.button`
  position: absolute;
  top: -99999px;
  left: -99999px;
  width: 0;
  height: 0;
  clip-path: polygon(0 0, 0 0, 0 0);
`