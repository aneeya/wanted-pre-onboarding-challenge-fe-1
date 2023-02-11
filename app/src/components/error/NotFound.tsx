
import { ReactComponent as Modeuli } from "../../assets/error.svg"
import E from "../../styles/layout/errorLayout"

export default function NotFound() {
  return (
    <>
      <E.Div>
        <Modeuli width='20rem' height='22rem'/>
        <E.Messeage>찾을 수 없는 페이지 입니다.</E.Messeage>
        <E.Button as='a' theme='small' href="/">home</E.Button>
      </E.Div>
    </>
  )
}


