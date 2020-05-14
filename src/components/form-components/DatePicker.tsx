import React  from 'react'
import ReactDatePicker from 'react-date-picker'
import "./date-picker.css"
import { Question } from '~/forms/types'
import { useFormField } from '~/contexts/form'


const DatePicker: React.FC<{ question: Question }> = (props) => {
  const { question } = props
  const [ value, setValue ] = useFormField(question.id)

  return (
    <ReactDatePicker
      className="date-picker"
      onChange={date => setValue(date as Date)}
      value={value as Date}
      clearIcon={null}
    />
  );

}

export default DatePicker
