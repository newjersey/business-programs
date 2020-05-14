import React  from 'react'
import { Question } from '~/forms/types'
import { TextArea as GrommetTextArea } from 'grommet'
import { useFormField } from '~/contexts/form'

interface Props {
  question: Question
  [key: string]: any
}

const TextArea: React.FC<Props> = (props) => {
  const { question } = props
  const [ value, setValue ] = useFormField(question.id)
  return <GrommetTextArea value={value as string} onChange={e => setValue(e.target.value)} />
}

export default TextArea
