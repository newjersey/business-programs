import React  from 'react'
import { Question } from '../../forms/types'
import { Box, RadioButtonGroup } from 'grommet'
import {  useFormField } from '../../contexts/form'

import './single-select.css'

interface Props {
  question: Question
}

const SingleSelect: React.FC<Props> = (props) => {
  const { question } = props
  const [ value, setValue ] = useFormField(question.id)

  if (!question || !question.options) {
    return <Box />
  }
  return (
    <RadioButtonGroup
      value={value}
      name={question.id}
      options={question.options.map(o => o.name)}
      onChange={event => setValue(event.target.value)}
    /> 
  )
}

export default SingleSelect
