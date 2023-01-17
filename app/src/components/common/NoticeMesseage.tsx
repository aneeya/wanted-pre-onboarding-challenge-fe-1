import styled from "styled-components"

export default function NoticeMesseage({text}: {text: string}) {
  return(
    <Div>{text}</Div>
  )
}

//style

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 10rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-blue);
`