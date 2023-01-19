import React, { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useConfirmModal from "../../hooks/Confirm_modal";
import { useJoinUser } from "../../hooks/User_query";
import joinCondition, { initState } from "../../reducer/joinCondition";
import { joinButtonActive } from "../../validatation/joinvaildate";
import Button from "../common/Button"; 
import HiddenButton from "../common/HiddenButton";

export default function JoinUser() {
  const [ setConfirm, toggleConfirm ] = useConfirmModal({text: "회원가입을 완료 하시겠습니까?", ok: confirmUserInfo}) 
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
    const submitButton = document.querySelector('#joinUser-submit') as HTMLButtonElement
    submitButton.click() 
  }
  
  const submitUserInfo = (e: SubmitEvent) => {
    e.preventDefault()
    joinMutation.mutate()
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
            />
          <S.ValidateState >{passwordValidation}</S.ValidateState>
        </S.InputLayout>
        <S.Buttons>
          <Button
            text="가입"
            type="button"
            size={{width: '8rem', height: '4rem'}}
            disabled={joinButtonActive(state)}
            onClick={toggleConfirm as () => void}
            color="ok" />
          <Button
            text="취소"
            type="button"
            size={{width: '8rem', height: '4rem'}}
            onClick={() => nav('/')}/>
          <HiddenButton type="submit" ref={buttonRef} />
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
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 5rem;
`

S.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`
S.Input = styled.input`
  width: 22rem;
  height: 3.8rem;
  border-radius: 1.2rem;
  padding: 1rem;
  font-size: 1.4rem;
`
S.ValidateState = styled.span`
  position: absolute;
  bottom: 20%;
  right: -19rem;
  width: 18rem;
  font-size: 1.2rem;
  color: var(--color-red);
`

S.Buttons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
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