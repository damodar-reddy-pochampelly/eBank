import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const LoginCard = styled.div`
  display: flex;
  background-color: #e0eefe;
  height: 80vh;
  width: 60vw;
  border-radius: 20px;
`
export const LoginImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
`

export const LoginImage = styled.img`
  width: 300px;
  height: 250px;
`

export const LoginForm = styled.form`
  background-color: #ffffff;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
`

export const LoginFormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  color: #152850;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #5a7184;
`

export const InputElement = styled.input`
  padding: 8px 8px;
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid #c3cad9;
  border-radius: 4px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
  }
`

export const LoginButton = styled.button`
  background-color: #1565d8;
  border: none;
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 5px;
  margin-top: 20px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
  text-align: center;
`
