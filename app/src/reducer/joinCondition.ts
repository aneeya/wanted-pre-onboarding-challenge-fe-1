import { vaildateEmail, vaildatePassword } from "../validatation/joinvaildate"

export const initState = { 
  email: '', 
  emailState: '',
  password: '',
  passwordState: ''
} 

 const joinCondition = ( 
  state: typeof initState, 
  action: {type: string, value: string}): typeof initState => {
    switch(action.type) {
      case 'email':
        return vaildateEmail(action.value) ?
              { ...state, email: action.value, emailState: ''} :
              { ...state, emailState: '올바른 이메일 형식이 아닙니다(ex: abc@todo.com)'}
      case 'password':
        return vaildatePassword(action.value) ?
              { ...state, password: action.value, passwordState: ''} :
              { ...state, passwordState: '8자리 이상 입력해주세요'} 
      default:
        return state
    }
} 

export default joinCondition