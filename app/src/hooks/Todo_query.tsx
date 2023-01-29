import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo, getTodos, postTodo, updateTodo } from "../api/todoApi";
import { Todo, TodoInput } from "../types/todolistType";

export function useGetTodoList() {

  return useQuery(['@todos'], getTodos, {
    onError: (e: AxiosError) => {
      if(e.response?.statusText === 'Bad Request') {
        alert('로그인 다시 해주세요')
        window.localStorage.removeItem('token')
        window.location.replace('login')
      } else {
        const message = e.response?.data as {details: string}
        alert(message.details)
      }
    }
  })
}

export function useGetTodoItem() {
  const paramId = useParams().id
  const query = useQueryClient()

  const { status, data } =  useQuery(['@todos', paramId], getTodos, {
    onSuccess: (data) => {
      query.setQueryData(['@todos', paramId], () => {
        return data.filter((todo: Todo) => todo.id === paramId) 
      })
    },
    onError: (e: AxiosError) => {
      if(e.response?.statusText === 'Bad Request') {
        alert('로그인 다시 해주세요')
        window.localStorage.removeItem('token')
        window.location.replace('login')
      } else {
        const message = e.response?.data as {details: string}
        alert(message.details)
      }
    }
  })

  
  if(status === 'success') return data[0]
}

export function useRegisterTodo(newTodo: TodoInput, result: () => void) {
  const query = useQueryClient()
  const nav = useNavigate()

  return useMutation(() => postTodo(newTodo), {
    onSuccess: () => {
      query.invalidateQueries(['@todos'])
      result()
      nav('/todos')
    },
    onError: (e: AxiosError) => {
      const message = e.response?.data as {details: string}
      alert(message.details)
    }
  })
}

export function useUpdateTodo(
  id: string, updatingInfo: TodoInput, result: () => void) {
    const query = useQueryClient()

    return useMutation(() => updateTodo(id, updatingInfo), {
      onSuccess: () => {
        query.invalidateQueries(['@todos'])
        result()
      },
      onError: (e: AxiosError) => {
        const message = e.response?.data as {details: string}
        alert(message.details)
      }
    })
}

export function useDeleteTodo(id: string) {
  const query = useQueryClient()

  return useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      query.invalidateQueries(['@todos'])
      
    },
    onError: (e: AxiosError) => {
      const message = e.response?.data as {details: string}
      alert(message.details)
    }
  })
}