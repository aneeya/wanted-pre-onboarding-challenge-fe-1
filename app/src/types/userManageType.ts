export interface User {
  email: string
  password: string
}

export interface Join extends User{
  emailValidation: string
  passwordValidation: string
}