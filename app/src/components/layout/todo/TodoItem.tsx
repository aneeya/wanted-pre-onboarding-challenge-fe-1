import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useDeleteTodo } from "../../../hooks/Todo_query"
import Portal from "../../../Portal"
import { TodoProps } from "../../../types/todolistType"
import Button from "../../common/Button"
import Confirm from "../../common/ConfirmModal"


export default React.memo(function TodoItem({todo}: TodoProps) {
  const [ confirmModal, setComfirmModal] = useState(false)

  const { title, createdAt, updatedAt, id} = todo
  const deleteMutation = useDeleteTodo(id)
  console.log('todo')

  const deleteTodo = () => {
    deleteMutation.mutate()
  }

  const confirmAction = {
    ok: deleteTodo,
    cancel: () => setComfirmModal(false)
  }

  return(
    <>
      <Portal>
        {confirmModal && 
          <Confirm 
            text="정말 삭제 하시겠습니까?" 
            ok={confirmAction.ok} 
            cancel={confirmAction.cancel}/>}
      </Portal>

      <S.Li>
        <S.ButtonLayout>
          <Button
            styler="noborder"
            text="삭제"
            type="button"
            size={{
              width: "8rem",
              height: "4rem"
            }}
            onClick={() => setComfirmModal(true)}/>
        </S.ButtonLayout>
          <Link to={id}>
            <S.Link>
              <S.H3>{title}</S.H3>
              <div>
                <div>
                  <span>작성일</span>
                  <span>{createdAt}</span>
                </div>
                <div>
                  <span>업데이트</span>
                  <span>{updatedAt}</span>
                </div>
              </div>
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
  width: 30rem;
  height: 9rem;
  margin-bottom: 1rem;
  padding: 2rem 0 2rem 1rem;
  border-radius: 2rem;
  border: 2px solid var(--color-gray);
  &:hover,
  &:focus {
    background: var(--color-gray);
  }
`
S.ButtonLayout = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
S.Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

S.H3 = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`
