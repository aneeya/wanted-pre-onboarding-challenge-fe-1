import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../components/common/Button"
import NoticeMesseage from "../../components/common/NoticeMesseage"
import UpdateTodo from "../../components/form/UpdateTodo"
import TodoItemDetail from "../../components/layout/todo/TodoItemDetail"
import useConfirmModal from "../../hooks/Confirm_modal"
import { useGetTodoItem } from "../../hooks/Todo_query"
import imgIcon from "../../styles/imgSource"

export default function TodoListDetailPage() {
  const [ editMode, setEditMode ] = useState(false)
  const nav = useNavigate()
  const [ setConfirm, toggleConfirm ] = useConfirmModal({
    text: "상세보기를 닫으시겠습니까?",
    ok: () => nav('/todos')
  })

  const selectedTodo = useGetTodoItem()

  if( selectedTodo === undefined) {
    return <NoticeMesseage text="해당 목록이 존재하지 않습니다" />
  }

  return(
    <>
      {setConfirm}
      <S.Layout>
      { !editMode 
        ?
        <>
          <S.CloseButton type="button" onClick={toggleConfirm}>
            <S.CloseIcon src={imgIcon.deleteIcon} />
          </S.CloseButton>
          <S.ButtonLayout>
            <Button
              text="edit"
              type="button"
              size="small"
              color="var(--color-purple0)"
              onClick={() => setEditMode(true)}/>
          </S.ButtonLayout>
          <TodoItemDetail todo={selectedTodo} />
        </>
        :
          <UpdateTodo closeAction={() => setEditMode(false)} todo={selectedTodo} />
      }
      </S.Layout>
    </>
  )
}

//style

const S: any = {}

S.Layout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38rem;
  height: 50rem;
  border: 2px solid var(--color-gray-purple1);
  background: url(${imgIcon.paper}) top center / 35rem;
`
S.ButtonLayout = styled.div`
  margin: 7rem 0 2rem 22rem;
`

S.CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  background: none;
  &:hover,
  &:focus {
    background: var(--color-purple2);
  }
`

S.CloseIcon = styled.img`
  width: 1.5rem;
`

