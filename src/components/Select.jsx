import {useForm, Controller} from "react-hook-form"
import Select from "react-select"
const SelectForm = () => {
  const { register, handleSubmit,formState: { errors }, control } = useForm({
    mode: "onChange"
  }) 

  const selectOptions = [
    {value: "student", label: "Student"},
    {value: "developer", label: "Developer"},
    {value: "manager", label: "Manager"}
  ]

  const registerOptions = {
    role: { required: "Role is required!" }
  }
  const onSuccess = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSuccess)} className="container">
        <div className="row">
            <label>Your Role</label>
            <Controller
                name="role"
                control={control}
                defaultValue=""
                rules={registerOptions.role}
                render={({ field }) => (
                    <Select options={selectOptions} className="col-3" {...field} label="Text field" />
                )}
            />
            <small className="text-danger">
                    {errors?.role && errors.role.message}
            </small>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SelectForm