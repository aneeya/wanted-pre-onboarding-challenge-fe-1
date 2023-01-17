import { useState } from "react";
import styled from "styled-components";
import Portal from "../../../Portal";
import imgIcon from "../../../styles/imgSource";
import Button from "../../common/Button";
import Confirm from "../../common/ConfirmModal";

export default function HeaderLogined() {
  const [ logoutModal, setLogoutModal ] = useState(false)

  const clickLogout = () => {
    window.localStorage.removeItem('token')
    window.location.replace('/')
  }

  const confirmAction = {
    ok: clickLogout,
    cancel: () => setLogoutModal(false)
  }

  return(
    <>
      {
        logoutModal && 
          <Portal>
            <Confirm 
              text="로그아웃하시겠습니까?" 
              ok={confirmAction.ok} 
              cancel={confirmAction.cancel}/>
          </Portal>
      }
      <S.Layout>
        <S.IconLayout>
          <S.LoginIcon alt="로그인됨" src={imgIcon.login}/>
          logined
        </S.IconLayout>
        <Button
          styler="loginstate"
          type="button"
          text="로그아웃"
          size={{width: '8rem', height: '4rem'}}
          onClick={() => setLogoutModal(true)}/>
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

S.LoginIcon = styled.img`
  width: 2.5rem;
`