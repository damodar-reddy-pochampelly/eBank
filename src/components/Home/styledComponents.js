import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #152850;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`

export const WebsiteLogo = styled.img`
  width: 80px;
  height: 40px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  padding: 5px 10px;
`
export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 45px;
  color: #ffffff;
  font-weight: 500;
`

export const CardImage = styled.img`
  width: 400px;
`
