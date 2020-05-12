import React from 'react'
import { RadioButtonGroup } from 'grommet'
import { Question } from '../../forms/types'
import { useFormField, useFormDictionary } from '~/contexts/form'

interface Props {
  [key: string]: any
  question: Question
  onChange: (val: string) => void
}

const Boolean: React.FC<Props> = ({ question }) => {
  const [yes, no] = useFormDictionary('yes', 'no')

  const options = [{
    value: 'true',
    name: yes,
    label: yes
  },
  {
    value: 'false',
    name: no,
    label: no
  }]


  const [value, setValue] = useFormField(question.id)
  console.log(question, value)

  return <RadioButtonGroup name={question.id} options={options} value={value} onChange={e => setValue(e.target.value)}/>
}

export default Boolean
