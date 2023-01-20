import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginUser } from "../../hooks/User_query";
import { cancelButton } from "../../styles/styleProps";
import Button from "../common/Button";

export default function LoginUser() {
  const [ user, setUser ] = useState({email: '', password: ''})
  const nav = useNavigate()
  const loinMutation = useLoginUser(user)

  const chagneLoginUser = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement 
    setUser({ ...user, [name]: value})
  }

  const submitLoginUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    loinMutation.mutate()
    
  }

  const cancelButtonStyle = { ...cancelButton,
    onclick: () => nav('/')
  }

  return(
    <S.Form onSubmit={submitLoginUser}>
      <S.InputLayout>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input type="text" name="email" id="email" required onChange={chagneLoginUser}/>
      </S.InputLayout>
      <S.InputLayout>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input type="password" name="password" id="password" required onChange={chagneLoginUser}/>
      </S.InputLayout>
      <S.Buttons>
        <Button type="submit" text="로그인" color="var(--color-purple2)" />
        <Button { ...cancelButtonStyle }/>
      </S.Buttons>
    </S.Form>
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
  border: 2px solid var(--color-gray-purple0);
  padding: 1rem;
  font-size: 1.4rem;
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