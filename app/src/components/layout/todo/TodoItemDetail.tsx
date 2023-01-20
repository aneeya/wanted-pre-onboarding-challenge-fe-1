import styled from "styled-components";
import { TodoProps } from "../../../types/todolistType";


export default function TodoItemDetail({todo}: TodoProps) {
  const { title, content, createdAt, updatedAt } = todo
  return(
    <>
    <S.CreateDate>
      <span>create:</span>
      {createdAt}
    </S.CreateDate>
    <S.UpdateDate>
      <span>update:</span>
      {updatedAt}
    </S.UpdateDate>
    <S.Layout>
      <S.H2>{title}</S.H2>
      <S.P>{content}</S.P>
    </S.Layout>
    </>
  )
}

const S: any = {}

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30rem;
  height: 32rem;
  padding: 3rem;
  background: var(--color-purple0);
  border: 2px solid var(--color-gray-purple1);
`

S.H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-purple3);
`
S.P = styled.p`
  width: 24rem;
  height: 26rem;
  padding: 1rem;
  border: 1px solid var(--color-gray-purple1);
  border-radius: 0.5rem;
  font-size: 1.5rem;
`

S.CreateDate = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 21rem;
  height: 3rem;
  background: var(--color-green0);
  box-shadow:  2px 2px var(--color-gray-purple1);
  font-size: 1.2rem;
  color: var(--color-white);
  
`
S.UpdateDate = styled(S.CreateDate)`
  top: 5rem;
  background: var(--color-red-orange);
`