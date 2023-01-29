import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../../components/features/todo/TodoList";
import TodoPageLayout from "../../components/layout/TodoPageLayout";

export default function TodoListPage() {
  const nav = useNavigate()

  useEffect(() => {
    const loginState = window.localStorage.getItem('token')
    if(loginState === null) nav('/login')
    return
  })

  return(
    <>
      <TodoPageLayout element={<TodoList/>} /> 
    </>
  )
}



