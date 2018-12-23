import styled from 'styled-components'
import Image from './Image'
import Content from './Content'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 0;
  max-width: 850px;
`

Card.Content = Content
Card.Image = Image

export default Card
