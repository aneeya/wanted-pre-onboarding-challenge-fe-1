import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import useConfirmModal from "../../hooks/Confirm_modal"
import { useUpdateTodo } from "../../hooks/Todo_query"
import { ContainBT, OutlineBT } from "../../styles/buttonStyles"
import { Todo } from "../../types/todolistType"

interface Prop {
  closeAction: () => void
  todo: Todo
}

export default function UpdateTodo({closeAction, todo}: Prop) {
  const { id, title, content } = todo
  const [ todoInput, setTodoInput ] = useState({title, content})
  const { setConfirm, toggleConfirm }  = useConfirmModal({
    text: "편집을 완료 하시겠습니까?",
    ok: confirmTodoValue
  })

  const todoMutation = useUpdateTodo(id, todoInput, closeAction)

  const changeTodoValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoInput({ ...todoInput!, [e.target.name]: e.target.value})
  }

  function confirmTodoValue() {
    todoMutation.mutate()
  }
  

  return(
    <>
      {setConfirm}
      <S.Form>
        <S.Buttons>
          <ContainBT type="button" theme="small" onClick={toggleConfirm}>수정</ContainBT>
          <OutlineBT type="button" theme="small" onClick={closeAction}>취소</OutlineBT>
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
  align-items: center;
  width: 42rem;
  height: 25rem;
  padding: 3rem;
  margin-top: 11rem;
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
  width: 35rem;
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
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  font-size: 1.6rem;
  background: none;
  &::placeholder {
    font-size: 1.6rem;
  }
`

S.TextLayout = styled(S.InputLayout)`
  height: 15rem;
  font-size: 1.6rem;
  border-bottom: none;
  `
  
  S.TextArea = styled(S.Input)`
  border: 2px solid var(--color-gray-purple1);
  border-radius: 0.5rem;
  resize: none;
`

S.Buttons = styled.div`
  position: absolute;
  top: 5%;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 16rem;
  height: 5rem;
  font-size: 1.4rem;
`