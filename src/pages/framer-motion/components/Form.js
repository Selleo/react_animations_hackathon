import Input from './Input'
import SelectInput from './SelectInput'

const Form = () => (
  <form class="w-full max-w-lg">
    <Input label="Name" type="text" />
    <Input label="Date" type="date" />
    <SelectInput />
  </form>
)

export default Form
