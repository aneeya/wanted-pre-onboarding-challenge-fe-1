import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useJoinUser } from "../../hooks/User_query";
import Button from "../common/Button";
import Confirm from "../common/ConfirmModal";

export default function JoinUser() {
  const initState = { 
    email: '', 
    emailState: '',
    password: '',
    passwordState: ''
  } 
  const joinCondition = (
    state: typeof initState , 
    action: {type: string, value: string}): typeof initState => {
      switch(action.type) {
        case 'email':
          return vaildateEmail(action.value) ?
                { ...state, email: action.value, emailState: ''} :
                { ...state, emailState: '올바른 이메일 형식이 아닙니다(ex: abc@todo.com)'}
        case 'password':
          return vaildatePassword(action.value) ?
                { ...state, password: action.value, passwordState: ''} :
                { ...state, passwordState: '8자리 이상 입력해주세요'} 
        default:
          return state
      }
  } 

  const [ confirmModal, setConfirmModal ] = useState(false)  
  const [ state, dispatch ] = useReducer(joinCondition, initState )
  const { email, password, emailState, passwordState } = state
  const joinMutation = useJoinUser({email, password})
  const nav = useNavigate()

  const joinButtonActive = () => {
    if( email !=='' && 
        password !=='' && 
        emailState === '' && 
        passwordState === '') return false
    return true
  }

  const changeUserInfo = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement
    dispatch({type: name, value: value})
  }

  const submitUserInfo = () => {
    joinMutation.mutate()
  }

  const confirmAcion = {
    ok: submitUserInfo,
    cancel: () => setConfirmModal(false)
  }

  return (
    <>
      {confirmModal && 
        <Confirm text="회원가입을 완료 하시겠습니까?"
         ok={confirmAcion.ok} 
         cancel={confirmAcion.cancel} />}
      <S.Form>
        <S.InputLayout>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            type="text"
            name="email"
            id="email"
            placeholder="todo@todo.com"
            onChange={changeUserInfo}
            />
          <S.ValidateState >{emailState}</S.ValidateState>
        </S.InputLayout>
        <S.InputLayout>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input
            type="password"
            name="password"
            id="password"
            placeholder="8자리이상 입력해주세요"
            onChange={changeUserInfo}
            />
          <S.ValidateState >{passwordState}</S.ValidateState>
        </S.InputLayout>
        <S.Buttons>
          <Button
            text="가입"
            type="button"
            size={{width: '8rem', height: '4rem'}}
            disabled={joinButtonActive()}
            onClick={() => setConfirmModal(true)}
            color="ok" />
          <Button
            text="취소"
            type="button"
            size={{width: '8rem', height: '4rem'}}
            onClick={() => nav('/')}/>
        </S.Buttons>
      </S.Form>
    </>
  )
}

function vaildateEmail(email: string) {
  const emailCondition = 
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
       
  return emailCondition.test(email)
}

function vaildatePassword(password: string) {
  return password.length >= 8
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
  margin-top: 4rem;
`