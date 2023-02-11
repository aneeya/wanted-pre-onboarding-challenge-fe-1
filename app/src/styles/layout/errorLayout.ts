import styled from "styled-components"
import { ContainBT } from "../buttonStyles"

const E: any = {}

E.Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 20rem;
`

E.Messeage = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-purple3);
  margin: 3rem 0;
`

E.Button = styled(ContainBT)`
  font-size: 1.2rem;
`

export default E