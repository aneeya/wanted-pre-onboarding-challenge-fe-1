import { ReactNode } from "react"
import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/logo.svg"

interface Prop {
  element: ReactNode
}


export default function TodoPageLayout({element}: Prop) {
  return (
    <S.Main>
      <S.H2>
        <Logo width="30rem"/>
      </S.H2>
      {element}
    </S.Main>
  )
}


//style

const S: any = {}

S.Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`

S.H2 = styled.h2`
  margin-top: 22rem;
  margin-bottom: 5rem;
`