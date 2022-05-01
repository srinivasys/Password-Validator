import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  Paragraph,
  Input,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [text, setText] = useState('')
  const showErrMsg = text.length < 8

  const onChangeText = event => {
    setText(event.target.value)
  }

  return (
    <BgContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={text} onChange={onChangeText} />
        {showErrMsg && (
          <ErrMsg>Your password must be at least 8 characters</ErrMsg>
        )}
      </CardContainer>
    </BgContainer>
  )
}

export default PasswordValidator
