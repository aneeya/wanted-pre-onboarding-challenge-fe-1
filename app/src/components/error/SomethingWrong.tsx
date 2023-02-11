import { ReactComponent as Modeuli } from "../../assets/error.svg"
import E from "../../styles/layout/errorLayout"

export default function SomthingWrong() {
  return (
    <>
      <E.Div>
        <Modeuli width='20rem' height='22rem'/>
        <E.Messeage>sorry, something went wrong</E.Messeage>
        <E.Button as='a' theme='small' href={window.location.href}>retry</E.Button>
      </E.Div>
    </>
  )
}