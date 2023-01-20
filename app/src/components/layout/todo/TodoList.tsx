import React from "react";
import styled from "styled-components";
import { Todo, TodosProps } from "../../../types/todolistType";
import NoticeMesseage from "../../common/NoticeMesseage";
import RegisterTodo from "../../form/RegisterTodo";
import TodoItem from "./TodoItem";


export default React.memo(function TodoList({todos}: TodosProps) {

  const todoItems = () => {
    return todos!.length === 0 ?
    <NoticeMesseage text="등록한 todo 항목이 없습니다." /> :
    todos!.map( (todo: Todo) => <TodoItem key={todo.id} todo={todo}/>)
  }
   
  return(
    <>
      <S.Layout>
       <RegisterTodo/>
       <S.Ul>{todoItems()}</S.Ul>
      </S.Layout>
    </>
  )
})

//style

const S: any = {};


S.Layout = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 10rem;
`

S.Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
`