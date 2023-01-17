import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "../../components/layout/todo/TodoList";
import { useGetTodoList } from "../../hooks/Todo_query";

export default function TodoListPage() {
  const { status, data } = useGetTodoList()
  const nav = useNavigate()

  useEffect(() => {
    const loginState = window.localStorage.getItem('token')
    if(loginState === null) nav('/login')
    return
  })

  return(
    <S.Main>
      {status === 'success' &&
      <S.Layout>
        <TodoList todos={data.data}></TodoList>
        <Outlet/>
      </S.Layout>
      }
    </S.Main>
  )
}

//style

const S: any = {};

S.Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15rem;
`

S.Layout = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 108rem;
  &::before {
    content: '';
    position: absolute;
    top: 3%;
    left: 64%;
    width: 0.2rem;
    height: 70rem;
    background: var(--color-gray);
  } 
`

