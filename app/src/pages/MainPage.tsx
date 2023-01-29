import styled from "styled-components"
import MainLogined from "../components/features/main/MainLogined"
import MainLogout from "../components/features/main/MainLogout"
import { ReactComponent as MainImg }  from "../assets/mainpage.svg"
import { ReactComponent as Logo }  from "../assets/logo.svg"


export default function MainPage() {
  const storedToken = window.localStorage.getItem('token')

  return(
    <S.Main>
      <S.Layout>
        <S.ImgContent>
        <MainImg width='50rem'/>
        <span>아... 할 거 너무 많아</span>
        </S.ImgContent>
        <S.MainContent>
          <h2>
            <Logo width='30rem'/>
          </h2>
          <p>
            <span>This is webpage that</span>
            <span>helps you to manage</span>
            <span>your plans</span>
          </p>
        { storedToken !== null ? <MainLogined /> : <MainLogout /> }
        </S.MainContent>
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
  background-color: var(--color-purple0);
`

S.Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90rem;
  margin-top: 8rem;
`
S.ImgContent = styled.div`
  position: relative;
  width: 50rem;
  height: 34rem;
  & > span {
    position: absolute;
    top: 20%;
    right: 6.5%;
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
  }
`
S.MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 37rem;
  & > p {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 7rem;
    margin: 3rem 0 5rem 1rem;
    font-size: 2rem;
    font-family: var(--font-english);
    color: var(--color-purple3);
  }
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
