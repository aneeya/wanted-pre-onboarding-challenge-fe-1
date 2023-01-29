import React from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import useConfirmModal from "../../../hooks/Confirm_modal"
import { useDeleteTodo } from "../../../hooks/Todo_query"
import { TodoProps } from "../../../types/todolistType"
import { ReactComponent as XIcon } from "../../../assets/close.svg"


export default React.memo(function TodoItem({todo}: TodoProps) {
  const { setConfirm, toggleConfirm } = useConfirmModal({
    text: "정말 삭제 하시겠습니까?",
    ok: deleteTodo
  })

  const { title, id } = todo
  const deleteMutation = useDeleteTodo(id)
  const paramId = useParams()
  console.log(paramId.id)

  const isEntered = id === paramId.id


  function deleteTodo() {
    deleteMutation.mutate()
  }

  

  return(
    <>
      {setConfirm}

      <S.Li color={isEntered}>
        <S.Dot></S.Dot>
        <S.Button type='button' color={paramId.id} onClick={toggleConfirm}>
          <XIcon width='1.5rem'/>
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
  width: 50rem;
  height: 6rem;
  margin-bottom: 3rem;
  border-bottom: 3px solid var(--color-purple0);
  background: ${(prop) => prop.color ? 'var(--color-purple0)' : 'none'};
  &:hover,
  &:focus {
    background: var(--color-purple0);
  }
`

S.Button = styled.button`
  position: absolute;
  top: 50%;
  right: 3%;
  display: ${(prop) => prop.color ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
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
  margin-left: 1.8rem;
`

S.Dot = styled.span`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-purple2);
  transform: translateY(-50%);
`
