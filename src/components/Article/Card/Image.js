import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.div`
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.067);
  width: 300px;
  height: 200px;
  cursor: pointer;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 20px;
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
