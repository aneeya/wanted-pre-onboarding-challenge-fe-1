import { ReactNode } from "react"
import styled from "styled-components"

interface Prop {
  element: ReactNode,
  title: string
}

export default function AuthLayout({element, title}: Prop) {
  return (
    <S.Main>
      <S.Layout>
        <S.H2>{title}</S.H2>
         {element}
      </S.Layout>
    </S.Main>
  )
}

//style

const S: any = {}

S.Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 43rem;
  height: 45rem;
  padding: 4rem;
  background: var(--color-purple0);
  border-radius: 0.5rem;
  border: 2px solid var(--color-gray-purple0);
  box-shadow: 2px 3px var(--color-gray-purple0);
`

S.H2 = styled.h2`
  width: 32rem;
  height: 3.5rem;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-gray-purple0);
  font-size: 2rem;
  font-weight: 800;
`