import styled from "styled-components"
import MainLogined from "../components/layout/home/MainLogined"
import MainLogout from "../components/layout/home/MainLogout"
import imgIcon from "../styles/imgSource"

// interface Prop {
//   token: string | null
// }

export default function MainPage() {
  const storedToken = window.localStorage.getItem('token')

  return(
    <S.Main>
      <S.Layout>
        <S.H2>
          Todolist web
          <S.Icon alt="회원가입아이콘" src={imgIcon.penIcon} />
        </S.H2>
        <S.P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum nobis recusandae vero! Atque rerum
          illum exercitationem deserunt blanditiis quos maiores, natus quis! Vel fugit natus itaque provident quas
          porro!
        </S.P>
      { storedToken !== null ? <MainLogined /> : <MainLogout /> }
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
  background: url(${imgIcon.mainBackground}) bottom left / contain no-repeat;
  background-color: var(--color-purple0);
`

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50rem;
  margin-left: 50rem;
`

S.H2 = styled.h2`
display: flex;
align-items: center;
justify-content: space-between;
width: 45rem;
margin-bottom: 3rem;
font-size: 5rem;
font-weight: 800;
font-family: var(--font-english);
color: var(--color-purple3);
`

S.Icon = styled.img`
  width: 3rem;
`

S.P = styled.p`
  margin-left: 1rem;
  margin-bottom: 4rem;
  font-size: 2rem;
  font-family: var(--font-english);
  color: var(--color-gray-purple1);
  line-height: 1.2;
`
