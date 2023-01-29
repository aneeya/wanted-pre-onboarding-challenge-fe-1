import styled from "styled-components";

const Auth: any = {}

Auth.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

Auth.InputLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30rem;
  height: 10rem;
`

Auth.Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
Auth.Input = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 2px solid ${(prop) => {
    return prop.color === '' ? 
           'var(--color-gray-purple0)' : 
           'var(--color-red-orange)'
  }};
  padding: 1rem;
  font-size: 1.4rem;
`
Auth.ValidateState = styled.span`
  position: absolute;
  top: -9%;
  left: 25%;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 18rem;
  height: 3rem;
  font-size: 1.2rem;
  color: var(--color-red-orange);
`

Auth.Buttons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 32rem;
  height: 5rem;
  margin-top: 4rem;
  font-size: 1.6rem;
`

export default Auth