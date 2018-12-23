import styled from 'styled-components'

const Header = styled.header`
  background-color: #193278;
  width: 100%;
`
Header.Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`

Header.Logo = styled.div`
  font-size: 24px;
  color: #f7f7f7;
  letter-spacing: 0.02em;
  font-weight: bold;
  cursor: pointer;
`

export default Header
