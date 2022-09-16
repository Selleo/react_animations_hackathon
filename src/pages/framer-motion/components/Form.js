import { useEffect, useState } from 'react'

import Input from './Input'
import SelectInput from './SelectInput'

const Form = () => {
  const [inputNameQuery, setInputNameQuery] = useState('')
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
    <form class="w-full max-w-lg">
      <Input
        label="Name"
        type="text"
        error={errorMessage}
        onChange={onChangeInputName}
        value={inputNameQuery}
      />
      <Input label="Date" type="date" error="" value="" />
      <SelectInput />
    </form>
  )
}

export default Form
