import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { joinUser, loginUser } from "../api/userApi";
import { User } from "../types/userManageType";

export function useJoinUser(newUser: User) {

  return useMutation(() => joinUser(newUser), { 
    onSuccess: (data) => {
      window.localStorage.setItem('token', data.token)
      alert(data.message)
      window.location.replace('/')
    },
    onError: (e: AxiosError) => {
      const message = e.response?.data as {details: string}
      alert(message.details)
    }
  })
}

export function useLoginUser(user: User) {
  return useMutation(() => loginUser(user), {
    onSuccess: (data) => {
      window.localStorage.setItem('token', data.token)
      alert(data.message)
      window.location.replace('/')
    },
    onError: (e: AxiosError) => {
      const message = e.response?.data as {details: string}
      alert(message.details)
    }
  }) 
}
