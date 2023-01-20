import styled from "styled-components";
import useConfirmModal from "../../../hooks/Confirm_modal";
import imgIcon from "../../../styles/imgSource";
import { longinMove } from "../../../styles/styleAnimation";
import { loginStateButton } from "../../../styles/styleProps";
import Button from "../../common/Button";

export default function HeaderLogined() {
  const [ setConfirm, toggleConfirm ] = useConfirmModal({text: "로그아웃하시겠습니까?", ok: clickLogout})

  function clickLogout() {
    window.localStorage.removeItem('token')
    window.location.replace('/')
  }

  const buttonStyle = { ...loginStateButton, 
    onClick:  toggleConfirm as () => void}

  return(
    <>
      {setConfirm}
      <S.Layout>
        <S.IconLayout>
          <S.LoginIcon />
        </S.IconLayout>
        <Button { ...buttonStyle }/>
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
  align-items: center;
  justify-content: start;
  width: 10rem;
  height: 5rem;
  margin-right:1rem;
  border-radius: 25% / 50%;
  border: 2px solid var(--color-purple3);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-blue);
`

S.LoginIcon = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 0.3rem;
  border-radius: 50%;
  background: url(${imgIcon.smile}) center / 2rem no-repeat;
  background-color: var(--color-red-orange);
  animation: ${longinMove} 0.6s 0.1s alternate-reverse ease;
`