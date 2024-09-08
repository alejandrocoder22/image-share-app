import { useState } from 'react'

const useForm = (): {} => {
  const [form, setForm] = useState({})

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  return {
    handleForm,
    form
  }
}

export default useForm
