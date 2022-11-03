
const AuthInput: any = (props: any) => {
  return (
    <>
      <label className='auth__label'>{props.labelText}</label>
      <input className='auth__input' onChange={props.handleChange} type={props.type} name={props.nameText} />
    </>
  )
}

export default AuthInput
