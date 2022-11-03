import { useState } from 'react'

const useForm: any = () => {
  const [form, setForm] = useState({})

  const handleForm: any = (e: any) => {
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
