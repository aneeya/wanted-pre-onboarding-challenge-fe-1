import styled from "styled-components";
import { TodoProps } from "../../../types/todolistType";


export default function TodoItemDetail({todo}: TodoProps) {
  const { title, content} = todo
  return(
    <S.Layout>
      <S.H2>{title}</S.H2>
      <S.P>{content}</S.P>
    </S.Layout>
  )
}

const S: any = {}

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35rem;
  height: 36rem;
  padding: 3rem;
  background: var(--color-beige);
  border-radius: 1.6rem;
`

S.H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-dpblue);
`
S.P = styled.p`
  width: 28rem;
  height: 26rem;
  padding: 1rem;
  border: 1px solid var(--color-dpblue);
  border-radius: 0.5rem;
  font-size: 1.5rem;
`