import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

Content.Spacer = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 15px;
  line-height: 2;
  color: #6f6d71;
  font-weight: 500;
`

Content.Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`
Content.Hero = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  border-radius: 4px;
  object-fit: cover;
  object-position: 50% 50%;
  background-color: rgba(0, 0, 0, 0.067);
`
Content.Flex = styled.div`
  display: flex;
  flex-direction: row;
`
Content.Item = styled.div`
  flex: 3;
`

Content.Paragraph = styled.div`
  color: #212121;
  line-height: 1.5;
  font-size: 18px;
  p:first-child {
    margin-top: 0;
  }
  blockquote {
    border-left: 4px solid #193278;
    color: #404040;
    padding: 0 32px;
    margin: 0;
  }
  img {
    max-width: 100%;
    object-fit: contain;
    height: inherit;
  }
`

export default Content
