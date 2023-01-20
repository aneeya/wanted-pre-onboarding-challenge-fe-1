import { useState } from "react"
import Confirm from "../components/common/ConfirmModal"
import Portal from "../Portal"

interface Prop {
  text: string
  ok: () => void
}

export default function useConfirmModal({text, ok}: Prop) {
  const [ isOpen, setIsOpen ] = useState(false)

  const setConfirm = isOpen ?
    <Portal>
      <Confirm text={text} ok={ok} cancel={() => setIsOpen(false)}/>
    </Portal> :
    null

  const toggleConfirm = () => {
    setIsOpen(!isOpen)
  }

  return [setConfirm, toggleConfirm] 
}





