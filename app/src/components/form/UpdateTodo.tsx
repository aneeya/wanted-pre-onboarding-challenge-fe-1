import { useState } from "react"
import styled from "styled-components"
import { useUpdateTodo } from "../../hooks/Todo_query"
import { Todo } from "../../types/todolistType"
import Button from "../common/Button"

interface Prop {
  closeAction: () => void
  todo: Todo
}

export default function UpdateTodo({closeAction, todo}: Prop) {
  const { id, title, content } = todo
  const [ todoInput, setTodoInput ] = useState({title, content})

  const todoMutation = useUpdateTodo(id, todoInput, closeAction)

  const changeTodoValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoInput({ ...todoInput!, [e.target.name]: e.target.value})
  }

  const submitTodoValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoMutation.mutate()
  }

  return(
    <>
      <S.Form onSubmit={submitTodoValue}>
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
        <S.Buttons>
          <Button text="수정" type="submit" size={{width: '8rem', height: '4rem'}} color="ok"/>
          <Button text="취소" type="button" size={{width: '8rem', height: '4rem'}} onClick={closeAction}/>
        </S.Buttons>
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
  width: 35rem;
  height: 45rem;
`

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35rem;
  height: 36rem;
  padding: 3rem;
  background: var(--color-beige);
  border-radius: 1.6rem;
`

S.InputLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28rem;
  height: 2rem;
  margin-bottom: 2rem;
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
  background: var(--color-beige);
  &::placeholder {
    font-size: 1.6rem;
  }
`

S.TextLayout = styled(S.InputLayout)`
  width: 28rem;
  height: 26rem;
  font-size: 1.6rem;
`

S.TextArea = styled(S.Input)`
  width: 28rem;
  height: 26rem;
  border: 1px solid var(--color-dpblue);
  border-radius: 0.5rem;
  resize: none;
`

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
`