import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import useConfirmModal from "../../hooks/Confirm_modal"
import { useRegisterTodo } from "../../hooks/Todo_query"
import { ContainBT, OutlineBT } from "../../styles/buttonStyles"
import { ConfrimCustom } from "../../types/todolistType"

const init = {title: '', content: ''}

export default function CreateTodo() {
  const [ todoInput, setTodoInput ] = useState(init)
  const [ confirmType, setConfirmType ] = useState(false)
  const { setConfirm, toggleConfirm } = useConfirmModal(confirmState())

  const nav = useNavigate()
  const todoMutation = useRegisterTodo(todoInput!, toggleConfirm)

  const changeTodoValue = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    setTodoInput({ ...todoInput!, [name]: value})
  }
   
  function confirmState(): ConfrimCustom  {

    if(!confirmType) {
      return {
        text: '등록을 완료 하시겠습니까?',
        ok: () => todoMutation.mutate()
      } 
    } else {
      return {
        text: '작성중인 내용이 지워집니다. 취소 하시겠습니까?',
        ok: () => nav('/todos')
      }
    }
  }

  const confrimCreate = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if(target.innerText === '등록') setConfirmType(false)
    else setConfirmType(true)
    toggleConfirm()
  }


  return(
    <>
      {setConfirm}
      <S.Form>
        <S.DecoLayout>
          <S.DecoDot/>
          <S.DecoDot/>
          <S.DecoDot/>
        </S.DecoLayout>
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
        <S.Buttons>
          <ContainBT type="button" theme="small" onClick={confrimCreate} className='createtodoBT'>등록</ContainBT>
          <OutlineBT type="button" theme="small" onClick={confrimCreate} className='createtodoBT'>취소</OutlineBT>
        </S.Buttons>
      </S.Form>
    </>
  )
}

//styled

const S: any = {}

S.Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62rem;
  height: 45rem;
  padding: 4rem 0 4rem 5rem;
  border: 2px solid var(--color-purple3);
  box-shadow: 6px 6px var(--color-gray-purple1);
`

S.DecoLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 5.5rem;
  height: 90%;
  padding: 3rem 0;
  border-right: 2px solid var(--color-gray-purple1);
  transform: translateY(-50%);
`
S.DecoDot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-purple3);
`

S.InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 35rem;
  margin-bottom: 2rem;
`

S.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`
S.Input = styled.input`
  width: 100%;
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
  width: 16rem;
  height: 5rem;
  font-size: 1.4rem;
`