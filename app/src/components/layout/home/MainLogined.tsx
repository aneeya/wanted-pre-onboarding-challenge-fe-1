import { Link } from "react-router-dom";
import styled from "styled-components";
import imgIcon from "../../../styles/imgSource";

export default function MainLogined() {
  return(
    <>
      <S.Layout>
        <S.H2>
          TODO관리하기
          <S.Icon alt="연필아이콘" src={imgIcon.gotodo} />
        </S.H2>
        <S.Link>
          <Link to={'/todos'}>Go</Link>
        </S.Link>
      </S.Layout>
    </>
  )
}

//styled

const S: any = {}

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 18rem;
`

S.H2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 8.5rem;
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-dpblue);
`

S.Icon = styled.img`
  width: 4rem;
`

S.Link = styled.div`
  width: 12rem;
  height: 5rem;
  border-radius: 2.6rem;
  background: var(--color-black);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-white);
  &:hover,
  &:focus {
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
  }
`
