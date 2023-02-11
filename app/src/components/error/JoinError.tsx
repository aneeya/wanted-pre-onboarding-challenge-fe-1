import { ReactComponent as Modeuli } from "../../assets/error.svg"
import E from "../../styles/layout/errorLayout";

interface Prop {
  messeage: string
}

export default function JoniError({messeage}: Prop) {
  return (
    <>
      <E.Div>
        <Modeuli width='20rem' height='22rem'/>
        <E.Messeage>{messeage}</E.Messeage>
        <E.Button as='a' theme='small' href={'/login'} >login</E.Button>
      </E.Div>
    </>
  )
}

