import { Link } from "react-router-dom";
import styled from "styled-components";
import { gotojoinText } from "../../../styles/styleAnimation";

export default function MainLogined() {
  return(
    <>
        <S.Text>
          TODO 👇
        </S.Text>
        <S.Link>
          <Link to={'/todos'}>Go</Link>
        </S.Link>
    </>
  )
}

//styled

const S: any = {}

S.Text = styled.div`
  margin-bottom: 3rem;
  margin-left: 1rem;
  font-size: 2.5rem;
  font-family: var(--font-english);
  font-weight: 800;
  line-height: 1.5;
  color: var(--color-purple2);
  animation: ${gotojoinText} 0.8s 8 alternate ease-in;
`

S.Link = styled.div`
width: 16rem;
height: 6rem;
border-radius: 3rem;
margin-left: 1rem;
background: var(--color-green0);
font-size: 2rem;
font-weight: 800;
font-family: var(--font-korea);
color: var(--color-white);
&:hover,
&:focus {
  background: var(--color-green1);
}
`
