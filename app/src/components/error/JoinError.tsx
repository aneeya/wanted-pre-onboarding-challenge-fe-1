import styled from "styled-components";
import { ReactComponent as Modeuli } from "../../assets/error.svg"
import { ContainBT } from "../../styles/buttonStyles";
interface Prop {
  messeage: string
}
export default function JoniError({messeage}: Prop) {
  return (
    <>
      <Er.Div>
        <Modeuli width='12rem' height='14rem'/>
        <Er.Messeage>{messeage}</Er.Messeage>
        <Er.Button as='a' theme='small' href={'/login'} style={{marginLeft: '5rem'}}>login</Er.Button>
      </Er.Div>
    </>
  )
}

const Er: any = {}

Er.Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 10rem;
`

Er.Messeage = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-purple3);
  margin: 3rem 0;
`

Er.Button = styled(ContainBT)`
  font-size: 1.2rem;
`
