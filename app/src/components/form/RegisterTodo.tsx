import { useState } from "react"
import styled from "styled-components"
import { useRegisterTodo } from "../../hooks/Todo_query"
import Button from "../common/Button"

const init = {title: '', content: ''}

export default function RegisterTodo() {
  const [ todoInput, setTodoInput ] = useState(init)
  const todoMutation = useRegisterTodo(todoInput!, () => setTodoInput(init))

  const changeTodoValue = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    setTodoInput({ ...todoInput!, [name]: value})
  }

  const submitTodoValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoMutation.mutate()
    
  }
  

  return(
    <>
      <S.Form onSubmit={submitTodoValue}>
        <S.InputLayout>
          <S.Label htmlFor="title">title</S.Label>
          <S.Input
            type="text"
            id="title"
            name="title"
            value={todoInput.title}
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
        <S.Buttons>
          <Button 
            text="등록" 
            type="submit" 
            size={{width: '8rem', height: '4rem'}} 
            color="ok"/>
          <Button text="리셋" type="reset" size={{width: '8rem', height: '4rem'}} />
        </S.Buttons>
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
  justify-content: center;
  margin-right: 2rem;
`

S.InputLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 5rem;
`

S.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`
S.Input = styled.input`
  width: 22rem;
  height: 3.8rem;
  border-radius: 1.2rem;
  padding: 1rem;
  font-size: 1.4rem;
`
S.TextLayout = styled(S.InputLayout)`
  align-items: start;
  height: 10rem;
`

S.TextArea = styled(S.Input)`
  resize: none;
  height: 9rem;
`

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 5rem;
  margin-left: 7rem;
`