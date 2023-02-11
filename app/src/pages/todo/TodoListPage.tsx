import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../../components/features/todo/TodoList";
import TodoPageLayout from "../../components/layout/TodoPageLayout";
import { Token } from "../../types/userManageType";

export default function TodoListPage({storedToken}: Token) {
  const nav = useNavigate()

  useEffect(() => {
    if(storedToken === null) nav('/login')
    return
  })

  return(
    <>
      <TodoPageLayout element={<TodoList/>} /> 
    </>
  )
}



