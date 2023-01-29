import styled from "styled-components";
import useConfirmModal from "../../../hooks/Confirm_modal";
import { ContainBT } from "../../../styles/buttonStyles";
import imgIcon from "../../../styles/imgSource";
import { longinMove } from "../../../styles/styleAnimation";

export default function HeaderLogined() {
  const { setConfirm, toggleConfirm } = useConfirmModal({text: "로그아웃하시겠습니까?", ok: clickLogout})

  function clickLogout() {
    window.localStorage.removeItem('token')
    window.location.replace('/')
  }


  return(
    <>
      {setConfirm}
      <S.Layout>
        <S.IconLayout>
          <S.LoginIcon />
        </S.IconLayout>
        <ContainBT type="button" theme="small" onClick={toggleConfirm}>logout</ContainBT>
      </S.Layout>
    </>
  )
}

//style

const S: any = {}

S.Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18rem;
  font-size: 1.4rem;
`
S.IconLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 10rem;
  height: 5rem;
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
  animation: ${longinMove} 0.6s 0.1s reverse ease backwards;
`