import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const onErrors = (errors) => console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleRegistration, onErrors)}>
      <div>
        <label>Name</label>
        <input
          name="name"
          {...register("name", { required: "Name is required!" })}
        />
        <p style={{color: "red"}}>
        {errors.name && errors.name.message}
        </p>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: "E-mail is required!" })}
        />
        <p style={{color: "red"}}>
        {errors.email && errors.email.message}
        </p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", { required: "Password is required!" })}
        />
        <p style={{color: "red"}}>
        {errors.password && errors.password.message}
        </p>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
