import styled from "styled-components"
import MainLogined from "../components/layout/home/MainLogined"
import MainLogout from "../components/layout/home/MainLogout"

// interface Prop {
//   token: string | null
// }

export default function MainPage() {
  const storedToken = window.localStorage.getItem('token')

  return(
    <S.Main>
      {
      storedToken !== null ?
      <MainLogined /> :
      <MainLogout />
      }
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