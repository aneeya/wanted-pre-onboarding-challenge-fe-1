import styled from "styled-components";
import JoinUser from "../../components/form/JoinUser";

export default function JoinPage() {
  return(
    <S.Main>
      <S.Layout>
        <S.H2>회원가입</S.H2>
        <JoinUser />
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
  align-items: center;
  width: 45rem;
  height: 45rem;
`

S.H2 = styled.h2`
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 800;
`