import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1.5px solid ${({ $hasError }) => ($hasError ? '#e06980' : '#1e1e2d')};
  border-radius: 8px;
  padding: 12px 16px;
`

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $hasError }) => ($hasError ? '#e06980' : '#1e1e2d')};
`

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  color: #1e1e2d;
  background: transparent;
  width: 100%;

  &::placeholder {
    color: #9b9b9b;
  }
`

const HelpText = styled.span`
  font-size: 13px;
  color: #9b9b9b;
`

const ErrorText = styled.span`
  font-size: 13px;
  color: #e06980;
`

export default function InputField({ label, placeholder, helpText, error, ...rest }) {
  return (
    <Wrapper>
      <Field $hasError={!!error}>
        <Label $hasError={!!error}>{label}</Label>
        <Input placeholder={placeholder} {...rest} />
      </Field>
      {error ? <ErrorText>{error}</ErrorText> : <HelpText>{helpText}</HelpText>}
    </Wrapper>
  )
}
