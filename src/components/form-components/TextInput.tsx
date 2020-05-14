import React  from 'react'
import { TextInput as GrommetTextInput } from 'grommet'
import { useFormField } from '~/contexts/form'

const TextInput: React.FC<any> = (props) => {
  const { question } = props
  const [ value, setValue ] = useFormField(question.id)
  return <GrommetTextInput value={value as string} onChange={e => setValue(e.target.value)} color="black" />
}

export default TextInput
