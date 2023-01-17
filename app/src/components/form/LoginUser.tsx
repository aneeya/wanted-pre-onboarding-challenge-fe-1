import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginUser } from "../../hooks/User_query";
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

  return(
    <S.Form onSubmit={submitLoginUser}>
      <S.InputLayout>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input type="text" name="email" id="email" onChange={chagneLoginUser}/>
      </S.InputLayout>
      <S.InputLayout>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input type="password" name="password" id="password" onChange={chagneLoginUser}/>
      </S.InputLayout>
      <S.Buttons>
        <Button type="submit" text="로그인" size={{width: '8rem', height: '4rem'}} color="ok" />
        <Button type="button" text="취소" size={{width: '8rem', height: '4rem'}} onClick={() => nav('/')}/>
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

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
  margin-top: 4rem;
`