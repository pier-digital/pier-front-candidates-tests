import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #e06980;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #d05870;
  }

  &:active {
    background-color: #c04d65;
  }
`

export default function Button({ children, ...rest }) {
  return <StyledButton type="submit" {...rest}>{children}</StyledButton>
}
