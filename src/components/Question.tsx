import React from 'react'
import { Question as QuestionInterface } from '../forms/types'
import { getComponent } from '../forms'
import { Box, Heading, Text, Markdown } from 'grommet'
import { useForm } from '../contexts/form';

interface Props {
  question: QuestionInterface
}

const Question: React.FC<Props> = (props) => {
  const { question } = props
  const Component: React.FC<{ [key: string]: any }> = getComponent(question.type)

  const { values } = useForm()

  const value = values[question.id]
  const hasSwitch = question.switch && value && typeof value === 'string'

  // simple formatting for the question text
  const text = question.name.replace(/\n/g, "\n<br/>")

  return (
    <Box direction="column" margin={{ bottom: 'small' }}>
      <Box fill={true} margin={{ bottom: 'small' }}>
        <Text size="medium" color="black" margin={{ top: 'large' }}>
          {<span className="foo" dangerouslySetInnerHTML={{__html: text}} />}
        </Text>
      </Box>
      <Component width="100%" question={question} />
      <Box margin={{ top: 'xsmall' }}>
        {hasSwitch && question.switch![value as string]?.map(q => <Question question={q} />)}
      </Box>
    </Box>
  )
}

export default Question
