import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  HomeBgContainer,
  Header,
  WebsiteLogo,
  LogoutButton,
  Body,
  Heading,
  CardImage,
} from './styledComponents'

class Home extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <HomeBgContainer>
        <Header>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <LogoutButton type="button" onClick={this.onClickLogout}>
            Logout
          </LogoutButton>
        </Header>
        <Body>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <CardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </Body>
      </HomeBgContainer>
    )
  }
}

export default Home
