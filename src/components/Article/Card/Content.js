import styled from 'styled-components'

const Content = styled.div`
  padding: 5px 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

Content.Heading = styled.h2`
  font-size: 21px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  font-weight: bold;
  color: #171717;
  cursor: pointer;
  margin-top: 0;
`

Content.Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #707070;
  max-width: 90%;
`

Content.Footer = styled.div`
  font-size: 12px;
  color: #707070;
`

export default Content
