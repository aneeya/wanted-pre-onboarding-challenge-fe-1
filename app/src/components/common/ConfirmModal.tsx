import styled from "styled-components"
import { ContainBT, OutlineBT } from "../../styles/buttonStyles"
import imgIcon from "../../styles/imgSource"

interface Prop {
  text: string
  ok: () => void
  cancel: () => void
}

export default function Confirm({text, ok, cancel}: Prop) {

  return(
    <>
      <S.Background>
        <S.Layout>
          <S.ConfirmContent>
            <S.Icon alt='투두아이콘' src={imgIcon.main} />
            {text}
          </S.ConfirmContent>
          <S.Buttons>
            <ContainBT type="button" theme="small" onClick={ok}>yes</ContainBT>
            <OutlineBT type="button" theme="small" onClick={cancel}>cancel</OutlineBT>
          </S.Buttons>
        </S.Layout>
      </S.Background>
    </>
  )
}

//style

const S: any = {}

S.Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem; 
  height: 32rem;
  border-radius: 2rem;
  background: var(--color-white);
`
S.ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  font-size: 2rem;
  font-weight: bolder;
`
S.Icon = styled.img`
  width: 5.5rem;
`

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 17rem;
  height: 6rem;
  margin-top: 2rem;
  font-size: 1.4rem;
`