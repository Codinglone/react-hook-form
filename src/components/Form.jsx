import { useForm } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit } = useForm();  
  const onFormSubmit = data => console.log(data);
  const onErrors = errors => console.log(errors);
  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <input type="text" name="firstName" {...register('firstName')} />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form