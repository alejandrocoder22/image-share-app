interface Props {
  labelText: string
  handleChange: () => void
  type: string
  nameText: string
}

const AuthInput = (props: Props): JSX.Element => {
  return (
    <>
      <label className='auth__label'>{props.labelText}</label>
      <input className='auth__input' onChange={props.handleChange} type={props.type} name={props.nameText} />
    </>
  )
}

export default AuthInput
