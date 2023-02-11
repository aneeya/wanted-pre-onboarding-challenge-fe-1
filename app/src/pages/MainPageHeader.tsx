import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderLogined from "../components/features/header/HeaderLogined";
import HeaderLogout from "../components/features/header/HeaderLogout";
import imgIcon from "../styles/imgSource";
import { Token } from "../types/userManageType";


export default function MainPageHeader({storedToken}: Token) {
  
  return(
    <>
      <S.Header>
        <S.HeadLayout>
          <h1>
            <Link to={'/'}>
              <S.HomeIcon alt="홈으로가기" src={imgIcon.homeIcon}/>
            </Link>
          </h1>
          { storedToken !== null ? <HeaderLogined /> : <HeaderLogout />
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
  height: 15rem;
  background: var(--color-purple0);
  border-bottom: 1px solid var(--color-gray-purple1);
`

S.HeadLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80rem;
  height: 100%;
`

S.HomeIcon = styled.img`
  width: 6rem;
`

S.Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-purple0);
`