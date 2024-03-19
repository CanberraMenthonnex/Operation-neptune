import Input from './components/atoms/Input/Input'
import TextArea from './components/atoms/TextArea/TextArea.tsx'
import FormInput from './components/molecules/FormInput/FormInput'

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Input />
      <FormInput label="Name" />
      <TextArea label="Description" />
    </>
  )
}

export default App
