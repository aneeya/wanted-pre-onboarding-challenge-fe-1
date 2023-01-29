import { Link } from "react-router-dom";
import styled from "styled-components";
import { PremiumBT } from "../../../styles/buttonStyles";
import { gotojoinText } from "../../../styles/styleAnimation";

export default function MainLogout() {
  return(
    <>  
        <S.Text>
          Go to Join 👇
        </S.Text>
        <S.Link as='div' theme='large'>
          <Link to={'/join'}>회원가입</Link>
        </S.Link>
    </>
  )
}

//style

const S: any = {}

S.Text = styled.div`
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-family: var(--font-english);
  font-weight: 800;
  line-height: 1.5;
  color: var(--color-purple2);
  animation: ${gotojoinText} 0.8s 8 alternate ease-in;
`

S.Link = styled(PremiumBT)`
  font-size: 2.2rem;
`

