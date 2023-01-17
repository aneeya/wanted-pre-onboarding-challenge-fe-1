import axios from "axios"
import { User } from "../types/userManageType"
const baseURL = 'http://localhost:8080'

//회원가입

export const joinUser = async(newUser: User) => {
  const res = await axios.post(`${baseURL}/users/create`, newUser)
  return res.data
}

//로그인

export const loginUser = async(user: User) => {
  const res = await axios.post(`${baseURL}/users/login`, user)
  return res.data
}