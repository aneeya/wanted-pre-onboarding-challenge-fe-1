import CreateTodo from "../../components/form/CreateTodo";
import TodoPageLayout from "../../components/layout/TodoPageLayout";

export default function TodoAddPage() {
  return (
    <>
      <TodoPageLayout element={<CreateTodo/>}/>
    </>
  )
}