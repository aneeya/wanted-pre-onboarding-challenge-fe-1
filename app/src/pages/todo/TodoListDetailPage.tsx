import { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Button from "../../components/common/Button"
import NoticeMesseage from "../../components/common/NoticeMesseage"
import UpdateTodo from "../../components/form/UpdateTodo"
import TodoItemDetail from "../../components/layout/todo/TodoItemDetail"
import { useGetTodoList } from "../../hooks/Todo_query"
import { Todo } from "../../types/todolistType"

export default function TodoListDetailPage() {
  const [ editMode, setEditMode ] = useState(false)
  const paramId = useParams().id
  const { data } = useGetTodoList()

  const selectedTodo = (data.data as Todo[]).find( (cachedTodo: Todo) => cachedTodo.id === paramId) 
  
  if(selectedTodo === undefined) {
    return <NoticeMesseage text="해당 목록이 존재하지 않습니다" />
  }
  return(
    <>
      { !editMode 
        ?
        <S.Layout>
          <TodoItemDetail todo={selectedTodo!} />
          <Button 
            styler="noborder" 
            text="edit" 
            type="button" 
            size={{width: '8rem', height: '6rem'}} 
            onClick={() => setEditMode(true)}/>
        </S.Layout>
        :
        <UpdateTodo closeAction={() => setEditMode(false)} todo={selectedTodo!} />
      }
    </>
  )
}

//style

const S: any = {}

S.Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
`

