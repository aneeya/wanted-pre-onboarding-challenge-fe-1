import { useRef, useState } from "react"
import styled from "styled-components"
import useConfirmModal from "../../hooks/Confirm_modal"
import { useRegisterTodo } from "../../hooks/Todo_query"
import Button from "../common/Button"
import HiddenButton from "../common/HiddenButton"

const init = {title: '', content: ''}

export default function RegisterTodo() {
  const [ todoInput, setTodoInput ] = useState(init)
  const todoMutation = useRegisterTodo(todoInput!, () => setTodoInput(init))
  const [ setConfirm, toggleConfirm ] = useConfirmModal({
    text: "등록을 완료 하시겠습니까?",
    ok: confirmTodoValue
  })

  const buttonRef = useRef(null)

  const changeTodoValue = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    setTodoInput({ ...todoInput!, [name]: value})
  }

  const submitTodoValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.target.keyCode === 13) return false
    todoMutation.mutate()
  }
    
  function confirmTodoValue() {
    const hiddenButton = buttonRef.current! as HTMLButtonElement
    hiddenButton.click()
  }

  return(
    <>
      {setConfirm}
      <S.Form onSubmit={submitTodoValue}>
        <S.Buttons>
          <Button 
            text="등록" 
            type="button"  
            color="var(--color-purple2)"
            size="small"
            onClick={toggleConfirm as () => void}/>
          <Button text="리셋" type="reset" color="var(--color-purple0)" size="small"/>
          <HiddenButton a="hidden" ref={buttonRef} />
        </S.Buttons>
        <S.InputLayout>
          <S.Label htmlFor="title">title</S.Label>
          <S.Input
            type="text"
            id="title"
            name="title"
            value={todoInput.title}
            required
            onChange={changeTodoValue}/>
        </S.InputLayout>
        <S.TextLayout >
          <S.Label htmlFor="content">content</S.Label>
          <S.TextArea as="textarea"
            name="content"
            id="content"
            value={todoInput.content}
            onChange={changeTodoValue}></S.TextArea>
        </S.TextLayout>
      </S.Form>
    </>
  )
}

//styled

const S: any = {}

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38rem;
  height: 45rem;
  margin-right: 2rem;
  border: 2px solid var(--color-gray-purple1);
`

S.InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 28rem;
  margin-bottom: 2rem;
`

S.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`
S.Input = styled.input`
  width: 28rem;
  height: 4rem;
  margin-top: 0.5rem;
  border: none;
  border-bottom: 2px solid var(--color-gray-purple1);
  padding: 1rem;
  font-size: 1.4rem;
`
S.TextLayout = styled(S.InputLayout)`
  align-items: start;
  height: 23rem;
`

S.TextArea = styled(S.Input)`
  resize: none;
  height: 20rem;
  margin-top: 2rem;
  border: 2px solid var(--color-gray-purple1);
`

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
  margin: 2rem 0 2rem 8rem;
`