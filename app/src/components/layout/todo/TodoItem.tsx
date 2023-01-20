import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import useConfirmModal from "../../../hooks/Confirm_modal"
import { useDeleteTodo } from "../../../hooks/Todo_query"
import imgIcon from "../../../styles/imgSource"
import { TodoProps } from "../../../types/todolistType"


export default React.memo(function TodoItem({todo}: TodoProps) {
  const [ setConfirm, toggleConfirm ] = useConfirmModal({
    text: "정말 삭제 하시겠습니까?",
    ok: deleteTodo
  })

  const { title, id} = todo
  const deleteMutation = useDeleteTodo(id)
  console.log('todo')

  function deleteTodo() {
    deleteMutation.mutate()
  }

  

  return(
    <>
      {setConfirm}

      <S.Li>
        <S.Dot></S.Dot>
          <S.Button type='button' onClick={toggleConfirm}>
            <S.DeleteIcon src={imgIcon.deleteIcon} alt="삭제하기" />
          </S.Button>
          <Link to={id}>
            <S.Link>
              <S.H3>{title}</S.H3>
            </S.Link>
          </Link>
      </S.Li>
    </>
  )
})

//style

const S: any = {}

S.Li = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32rem;
  height: 6rem;
  margin-bottom: 3rem;
  border-bottom: 3px solid var(--color-purple0);
  &:hover,
  &:focus {
    background: var(--color-purple0);
  }
`

S.Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: var(--color-purple2);
  }
`
S.DeleteIcon = styled.img`
  width: 1rem;
`

S.Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 4rem;
`

S.H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-right: 2rem;
`

S.Dot = styled.span`
  position: absolute;
  top: 40%;
  left: 5%;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-purple2);
`
