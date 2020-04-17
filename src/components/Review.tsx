import React, { useContext } from 'react'
import { Box, Heading, Button } from 'grommet'
import { getCopy, translate } from '../forms/index';
import { LanguageContext } from '../contexts/language'
import Amplify, { API } from 'aws-amplify'
import awsconfig from '../aws-exports';

import { FormContext } from '../contexts/form'


function sendData () {
}

const Review: React.FC<{}> = () => {

  const { values } = useContext(FormContext)

  const { language } = useContext(LanguageContext)
  // TODO: the rules for program eligability
  const enabled = ["ppp"]
  const link = "/results.html?" + enabled.map(program => "eligable=" + program).join("&")

  return (
    <Box pad="medium">
      <Heading margin="none" level={3}>{translate(getCopy('submit'), language)}</Heading>
      <Button color="black !important" href={link}>See Results</Button>
    </Box>
  )
}

export default Review
