import { Link } from "react-router-dom";
import styled from "styled-components";
import imgIcon from "../../../styles/imgSource";

export default function MainLogout() {
  return(
    <S.Layout>
      <S.H2>
        회원가입 하러 가기
        <S.Icon alt="회원가입아이콘" src={imgIcon.gojoin} />
      </S.H2>
      <S.Link>
        <Link to={'/join'}>회원가입</Link>
      </S.Link>
    </S.Layout>
  )
}

//style

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
height: 9rem;
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
