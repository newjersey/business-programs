import React from 'react'
import './select.css'
import { Question, Option } from '../../forms/types'
import { Select as GrommetSelect, Box } from 'grommet'
import { useFormField } from '~/contexts/form'


interface Props {
  [key: string]: any
  question: Question
}

const Select: React.FC<Props> = (props) => {
  const { question } = props
  const [ value, setValue ] = useFormField(question.id)

  if (!props.question) {
    return <Box />
  }

  const options = question.options!.map((option: Option) => option.name)

  return (
    <GrommetSelect
      // TODO: we should translate these a11y titles if we want to use them
      a11yTitle="select language"
      margin={{ top: 'xsmall' }}
      options={options}
      value={value}
      onChange={({ option }) => setValue(option)}
      id={question.id}
      name={question.name}
    />
  )
}
export default Select
