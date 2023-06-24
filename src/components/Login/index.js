import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BgContainer,
  LoginCard,
  LoginImageContainer,
  LoginImage,
  LoginForm,
  LoginFormHeading,
  InputContainer,
  Label,
  InputElement,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {errorMessage: '', showError: false, userId: '', pin: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const userCredentials = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(loginUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', `${jwtToken}`, {
        expires: 7,
      })
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      const error = data.error_msg
      this.setState({showError: true, errorMessage: error})
    }
  }

  render() {
    const {errorMessage, showError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginCard>
          <LoginImageContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LoginImageContainer>
          <LoginForm onSubmit={this.onFormSubmit}>
            <LoginFormHeading>Welcome Back!</LoginFormHeading>
            <InputContainer>
              <Label htmlFor="USER_ID">User ID</Label>
              <InputElement
                placeholder="Enter User ID"
                type="text"
                onChange={this.onChangeUserId}
                id="USER_ID"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="PIN">PIN</Label>
              <InputElement
                placeholder="Enter PIN"
                type="password"
                onChange={this.onChangePin}
                id="PIN"
              />
            </InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showError && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </LoginForm>
        </LoginCard>
      </BgContainer>
    )
  }
}

export default Login
