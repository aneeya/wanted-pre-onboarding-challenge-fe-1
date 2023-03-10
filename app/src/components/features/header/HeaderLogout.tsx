import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ContainBT } from "../../../styles/buttonStyles"
import imgIcon from "../../../styles/imgSource"
import { longinMove } from "../../../styles/styleAnimation"

export default function HeaderLogout() {
  const nav = useNavigate()

  return(
    <>
      <S.Layout>
        <S.IconLayout>
          <S.LogoutIcon/>
        </S.IconLayout>
        <ContainBT type="button" theme="small" onClick={() => nav('/login')}>login</ContainBT>
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
S.LogoutIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 5.3rem;
  border-radius: 50%;
  background: url(${imgIcon.smile}) center / 2rem no-repeat;
  background-color: var(--color-gray-purple0);
  transform: rotate(180deg);
  animation: ${longinMove} 0.6s 0.1s alternate ease backwards;
`