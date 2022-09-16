import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Input from './Input'
import SelectInput from './SelectInput'

const Form = () => {
  const [inputNameQuery, setInputNameQuery] = useState('')
  const [date, setDate] = useState(() => new Date().toLocaleDateString('en-CA'))

  const [errorMessage, setErrorMessage] = useState('')

  const onChangeInputName = (e) => {
    setInputNameQuery(e.target.value)
  }

  useEffect(() => {
    if (inputNameQuery.length === 1)
      setErrorMessage('Name should have more than 1 letter')
    else setErrorMessage('')
  }, [inputNameQuery])

  return (
    <motion.form
      class="w-full max-w-lg"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
    >
      <Input
        label="Name"
        type="text"
        error={errorMessage}
        onChange={onChangeInputName}
        value={inputNameQuery}
      />
      <Input
        label="Date"
        type="date"
        error=""
        onChange={(e) => {
          console.log(e)
          setDate(e.target.value)
        }}
        value={date}
      />
      <SelectInput />
    </motion.form>
  )
}

export default Form
