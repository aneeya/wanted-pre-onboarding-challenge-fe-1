import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinPage from "../pages/auth/JoinPage";
import LoginPage from "../pages/auth/LoginPage";
import MainPage from "../pages/MainPage";
import MainPageHeader from "../pages/MainPageHeader";
import TodoListDetailPage from "../pages/todo/TodoListDetailPage";
import TodoListPage from "../pages/todo/TodoListPage";
import TodoAddPage from "../pages/todo/TodoAddPage";
import NotFound from "../components/error/NotFound";

export default function Router() {
  const storedToken = localStorage.getItem('token')

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageHeader storedToken={storedToken}/>}>
          <Route path="/" element={<MainPage storedToken={storedToken}/>}/>
          <Route path="/join" element={<JoinPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/todos" element={<TodoListPage storedToken={storedToken}/>}>
            <Route path=":id" element={<TodoListDetailPage/>}/>
          </Route>
          <Route path="/create" element={<TodoAddPage storedToken={storedToken}/>}/>
        </Route>
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}