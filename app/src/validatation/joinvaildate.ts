export function vaildateEmail(email: string) {
  const emailCondition = 
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
       
  return emailCondition.test(email)
}

export function vaildatePassword(password: string) {
  return password.length >= 8
}