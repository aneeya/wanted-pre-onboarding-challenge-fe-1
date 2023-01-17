import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderLogined from "../components/layout/home/HeaderLogined";
import HeaderLogout from "../components/layout/home/HeaderLogout";
import imgIcon from "../styles/imgSource";


export default function MainPageHeader() {
  const storedToken = window.localStorage.getItem('token')
  
  return(
    <>
      <S.Header>
        <S.HeadLayout>
          <h1>
            <Link to={'/'}>
              <S.HomeIcon alt="홈으로가기" src={imgIcon.main}/>
            </Link>
          </h1>
          { storedToken  !== null ?
            <HeaderLogined /> :
            <HeaderLogout />
          }
        </S.HeadLayout>
      </S.Header>
      <Outlet />
    </>
  )
}

//style

const S: any = {}

S.Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  background: var(--color-white);
`

S.HeadLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80rem;
  height: 100%;
`

S.HomeIcon = styled.img`
  width: 12rem;
`