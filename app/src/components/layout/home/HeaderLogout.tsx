import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import imgIcon from "../../../styles/imgSource"
import Button from "../../common/Button"

export default function HeaderLogout() {
  const nav = useNavigate()
  return(
    <>
      <S.Layout>
        <S.IconLayout>
          <S.LogoutIcon alt="로그아웃됨" src={imgIcon.logout}/>
          logouted
        </S.IconLayout>
        <Button
            styler="loginstate"
            type="button"
            text="로그인"
            size={{width: '8rem', height: '4rem'}}
            onClick={() => nav('/login')}/>
      </S.Layout>
    </>
  )
}

//style

const S: any = {}

S.Layout = styled.div`
  display: flex;
  align-items: center;
`

S.IconLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 10rem;
  heith: 5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-blue);
`
S.LogoutIcon = styled.img`
  width: 2.5rem;
`