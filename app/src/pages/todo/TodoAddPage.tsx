import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateTodo from "../../components/form/CreateTodo";
import TodoPageLayout from "../../components/layout/TodoPageLayout";
import { Token } from "../../types/userManageType";

export default function TodoAddPage({storedToken}: Token) {
  const nav = useNavigate()

  useEffect(() => {
    if(storedToken === null) nav('/login')
    return
  })
  
  return (
    <>
      <TodoPageLayout element={<CreateTodo/>}/>
    </>
  )
}