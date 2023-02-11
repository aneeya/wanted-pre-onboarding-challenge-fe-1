
import { ReactComponent as Modeuli } from "../../assets/error.svg"
import E from "../../styles/layout/errorLayout"

export default function NotFound() {
  localStorage.removeItem('token')

  return (
    <>
      <E.Div>
        <Modeuli width='20rem' height='22rem'/>
        <E.Messeage>인증 기간이 만료되어 재로그인이 필요합니다.</E.Messeage>
        <E.Button as='a' theme='small' href="/login">login</E.Button>
      </E.Div>
    </>
  )
}


