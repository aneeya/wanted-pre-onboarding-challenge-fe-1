import axios from "axios"
import { TodoInput } from "../types/todolistType"

const baseURL = 'http://localhost:8080/todos'
//todolist 가져오기

export const getTodos = async() => {
  const res = await axios.get(baseURL)
  return res.data
}

//todo 등록하기

export const postTodo = async(newTodo: TodoInput) => {
  const res = await axios.post(baseURL, newTodo)
  return res.data
}

//todo 편집하기

export const updateTodo = async(id: string, updatingTodo: TodoInput) => {
  const res = await axios.put(`${baseURL}/${id}`, updatingTodo)
  return res.data
}

//todo 삭제

export const deleteTodo = async(id: string) => {
  const res = await axios.delete(`${baseURL}/${id}`)
  return res.data
}