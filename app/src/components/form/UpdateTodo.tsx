import { ChangeEvent, useRef, useState } from "react"
import styled from "styled-components"
import useConfirmModal from "../../hooks/Confirm_modal"
import { useUpdateTodo } from "../../hooks/Todo_query"
import { Todo } from "../../types/todolistType"
import Button from "../common/Button"
import HiddenButton from "../common/HiddenButton"

interface Prop {
  closeAction: () => void
  todo: Todo
}

export default function UpdateTodo({closeAction, todo}: Prop) {
  const { id, title, content } = todo
  const [ todoInput, setTodoInput ] = useState({title, content})
  const [ setConfirm, toggleConfirm ] = useConfirmModal({
    text: "편집을 완료 하시겠습니까?",
    ok: confirmTodoValue
  })

  const buttonRef = useRef(null)

  const todoMutation = useUpdateTodo(id, todoInput, closeAction)

  const changeTodoValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoInput({ ...todoInput!, [e.target.name]: e.target.value})
  }

  function confirmTodoValue() {
    const hiddenButton = buttonRef.current! as HTMLButtonElement
    hiddenButton.click()
  }

  const submitTodoValue = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoMutation.mutate()
  }
  

  return(
    <>
      {setConfirm}
      <S.Form onSubmit={submitTodoValue}>
        <S.Buttons>
          <Button 
            text="수정" 
            type="button" 
            color="var(--color-purple2)" 
            size="small" 
            onClick={toggleConfirm as () => void}/>
          <Button 
            text="취소" 
            type="button" 
            color="var(--color-purple0)" 
            size="small" onClick={closeAction}/>
          <HiddenButton ref={buttonRef!} a="hidden" />
        </S.Buttons>
        <S.Layout>
          <S.InputLayout>
            <S.Label htmlFor="title">title</S.Label>
            <S.Input
              type="text"
              id="title"
              name="title"
              onChange={changeTodoValue}
              placeholder={title}/>
          </S.InputLayout>
          <S.TextLayout>
            <S.Label htmlFor="content">content</S.Label>
            <S.TextArea
              as="textarea"
              name="content"
              id="content"
              onChange={changeTodoValue}
              defaultValue={content}></S.TextArea>
          </S.TextLayout>
        </S.Layout>
      </S.Form>
    </>
  )
}

//style

const S: any = {}

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 32rem;
  padding: 3rem;
  margin-top: 13rem;
  background: var(--color-purple0);
  border: 2px solid var(--color-gray-purple1);
`


S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%
  padding: 3rem;
`

S.InputLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24rem;
  height: 3.5rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 2px solid var(--color-gray-purple1);
`

S.Label = styled.label`
  position: absolute;
  dispaly: block
  width: 0;
  height: 0
  text-indent: -999999px;
  clip-path: polygon(0 0, 0 0, 0 0);
`
S.Input = styled.input`
  width: 28rem;
  padding: 1rem;
  border: none;
  font-size: 1.6rem;
  background: none;
  &::placeholder {
    font-size: 1.6rem;
  }
`

S.TextLayout = styled(S.InputLayout)`
  height: 20rem;
  font-size: 1.6rem;
  border-bottom: none;
  `
  
  S.TextArea = styled(S.Input)`
  width: 28rem;
  height: 20rem;
  border: 2px solid var(--color-gray-purple1);
  border-radius: 0.5rem;
  resize: none;
`

S.Buttons = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
`