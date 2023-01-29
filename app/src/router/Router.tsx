import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServerErrorPage from "../pages/error/ErrorPage_500";
import JoinPage from "../pages/auth/JoinPage";
import LoginPage from "../pages/auth/LoginPage";
import MainPage from "../pages/MainPage";
import MainPageHeader from "../pages/MainPageHeader";
import TodoListDetailPage from "../pages/todo/TodoListDetailPage";
import TodoListPage from "../pages/todo/TodoListPage";
import TodoAddPage from "../pages/todo/TodoAddPage";

export default function Router() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageHeader />}>
          <Route path="/" element={<MainPage />}/>
          <Route path="/join" element={<JoinPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/todos" element={<TodoListPage/>}>
            <Route path=":id" element={<TodoListDetailPage/>}/>
          </Route>
          <Route path="/create" element={<TodoAddPage/>}/>
          <Route path="/servererror" element={<ServerErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}