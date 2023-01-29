import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useGetTodoList } from "../../../hooks/Todo_query";
import { ContainBT } from "../../../styles/buttonStyles";
import { Todo } from "../../../types/todolistType";
import NoticeMesseage from "../../common/NoticeMesseage";
import TodoItem from "./TodoItem";


export default function TodoList() {
  const { status, data } = useGetTodoList()

  const todoItems = () => {
    return data!.length === 0 ?
    <NoticeMesseage text="등록한 todo 항목이 없습니다." /> :
    data!.map( (todo: Todo) => <TodoItem key={todo.id} todo={todo}/>)
  }
   
  return(
    <>
      { 
        status === 'success' &&
        <>
          <S.Link as='div' theme='medium'>
            <Link to={'/create'}>todo 작성하기</Link>
          </S.Link>
          <S.Contain>
            <S.Layout>
              <S.Ul>{todoItems()}</S.Ul>
            </S.Layout>
            <Outlet/>
          </S.Contain>
      </>
      }
    </>
  )
}

//style

const S: any = {};

S.Contain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
`

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 54rem;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; 
    }
`


S.Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Link = styled(ContainBT)`
  font-size: 1.4rem;
  height: 4.5rem;
  width: 12rem;
  margin: 0 0 3rem 0;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 12rem;
  }
`