import { Join } from "../types/userManageType"
import { vaildateEmail, vaildatePassword } from "../validatation/joinvaildate"

export const initState = { 
  email: '', 
  emailValidation: '',
  password: '',
  passwordValidation: ''
} 

 const joinCondition = ( 
  state: Join, 
  action: {type: string, value: string}): Join => {
    switch(action.type) {
      case 'email':
        return vaildateEmail(action.value) ?
              { ...state, email: action.value, emailValidation: ''} :
              { ...state, emailValidation: '올바른 이메일 형식이 아닙니다(ex: abc@todo.com)'}
      case 'password':
        return vaildatePassword(action.value) ?
              { ...state, password: action.value, passwordValidation: ''} :
              { ...state, passwordValidation: '8자리 이상 입력해주세요'} 
      default:
        return state
    }
} 

export default joinCondition